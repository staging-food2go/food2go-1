import { Component, ElementRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { FuseConfirmationService } from '@fuse/services/confirmation';
import { FuseLoadingService } from '@fuse/services/loading';
import { Cart, Item } from 'app/layout/common/cart/cart.model';
import { AuthService } from 'app/shared/services/auth.service';
import { CommonService } from 'app/shared/services/common.service';
import { ConsumerService } from 'app/shared/services/consumer.service';
import { NotificationService } from 'app/shared/services/notify.service';
import { UserService } from 'app/shared/services/user.service';
@Component({
    selector     : 'landing-checkout',
    templateUrl  : './checkout.component.html',
    styleUrls: ['./assets/css/theme.css'],
    encapsulation: ViewEncapsulation.None
})
export class CheckoutComponent
{
    @ViewChild('attachment') attachmentInput: ElementRef;

    records = [];
    keyword = '';
    today = new Date().getDay();
    shopLoading = true;
    user: any;
    store: any;
    checkoutForm: FormGroup;
    cart : Cart;
    subtotal: number = 0;
    total: number = 0;
    isAddingOrder = false;
    proof: any;
    hasProof = false;

    constructor(
    private _consumer: ConsumerService,
    private _common: CommonService,
    private _router: Router,
    private _auth: AuthService,
    private _user: UserService,
    private _fuseConfirmationService: FuseConfirmationService,
    private _fuseLoadingService: FuseLoadingService ,
    private _snackBar: MatSnackBar,
    private _formBuilder: FormBuilder

    )
    {
        
    }
    
    ngOnInit(): void {
        this.getUser();
        if (!this.user)
            this._router.navigateByUrl('/stores');
        this.getCart();
        this.store = this._consumer.getSelectedStore();
        this.total = this.getTotal();
        this.subtotal = this.getSubtotal(this.cart.items);
        this.store = this._consumer.getSelectedStore();
        // Create the form
        this.checkoutForm = this._formBuilder.group({
            name    : [this.user.first_name + ' ' + this.user.last_name, Validators.required],
            contact: [this.user?.user_informations?.primary_contact, Validators.required],
            address : [this.user?.user_informations?.complete_address, Validators.required],
            delivery_charge : [this.store.delivery_charge],
            convenience_fee : [5],
            user_shops_id   : [this.store.id],
            merchant_user_id   : [this.store.user_id],
            note   : [''],
            mode_of_payment    : ['cod'],
            total: [this.total],
            order_list: [this.cart.items]
        });
    }

    getUser() {
        this.user = this._auth.getUser();
    }

    getCart() {
        this.cart = this._consumer.getCart();
    }
   
    tConvert(time) {
        return this._common.tConvert(time);
    }

    back() {
        this._consumer.clearSelectedStore();
        this._router.navigateByUrl('/stores');
    }

    login () {
        this._router.navigateByUrl('/sign-in?redirectURL=stores/' + this.store.id);
    }
    logout() {
        this._auth.logout()
        .subscribe(()=>{
            this._router.navigateByUrl('/stores');
            this.getUser();
        });
    }

    getSubtotal(items : Item[]) : number {
        let total:number = 0;
        items.forEach((item: Item) => {
            total += (item?.price * item?.quantity);
        });
        return total;
    }

    getTotal () {
        return (this.store?.delivery_charge * 1)  + (this.cart?.total * 1) + 5;
    }

    placeOrder() {
        this._fuseConfirmationService.open(
            {
              title      : 'Are you sure?',
              message    : 'You want to place your order?',
              icon       : {
                  show : false,
                  name : 'heroicons_outline:question-mark-circle',
                  color: 'primary'
              },
              actions    : {
                  confirm: {
                      show : true,
                      label: 'Ok',
                      color: 'primary'
                  },
                  cancel : {
                      show : false,
                      label: 'Cancel'
                  }
              },
              dismissible: true
          }).afterClosed().subscribe(result => {
              if (result == 'confirmed') {
                this.isAddingOrder = true;
                this._consumer.addOrder(this.checkoutForm.value)
                .subscribe((response: any) => {
                    if (this.hasProof) {
                        this._consumer.upload(this.proof, response['result'].id)
                        .subscribe((response: any) => {
                            this.hasProof = false;
                        })
                    }
                    this._fuseConfirmationService.open(
                        {
                          title      : response['message'],
                          message    : '',
                          icon       : {
                              show : false,
                              name : 'heroicons_outline:question-mark-circle',
                              color: 'primary'
                          },
                          actions    : {
                              confirm: {
                                  show : true,
                                  label: 'Yes',
                                  color: 'primary'
                              },
                              cancel : {
                                  show : false,
                                  label: 'Cancel'
                              }
                          },
                          dismissible: true
                      }).afterClosed().subscribe(result => {
                        this._consumer.clearCart();
                        this._consumer.clearSelectedStore();
                        this._router.navigateByUrl('/stores')
                        setTimeout(() => {
                            this._router.navigateByUrl('/stores')
                        }, 5000);
                      });
                },
                (response: any) => {
                    this.isAddingOrder = false;
                })
              }
          });
    }

    onUpload(event) {
        let file = event.target.files[0];
        const formData: FormData = new FormData();
        formData.append('file', file);
        formData.append('_method', 'POST');
        this.proof = formData;
        this.hasProof = true;
    }

    resetProof() {
        this.hasProof = false;
        this.attachmentInput.nativeElement.value = "";
    }
}
