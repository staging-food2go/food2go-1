import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { FuseConfirmationService } from '@fuse/services/confirmation';
import { AuthService } from 'app/shared/services/auth.service';
import { CommonService } from 'app/shared/services/common.service';
import { ConsumerService } from 'app/shared/services/consumer.service';
import { NotificationService } from 'app/shared/services/notify.service';
import { UserService } from 'app/shared/services/user.service';

@Component({
    selector     : 'landing-home',
    templateUrl  : './customer/public/index.component.html',
    styleUrls: ['./customer/public/assets/css/theme.css'],
    encapsulation: ViewEncapsulation.None
})
export class LandingHomeComponent
{
    records = [];
    keyword = '';
    today = new Date().getDay();
    shopLoading = true;
    user = [];
    trackOrderNumber = '';
    constructor(
    private _consumer: ConsumerService,
    private _common: CommonService,
    private _router: Router,
    private _auth: AuthService,
    private _user: UserService,
    private _notify: NotificationService,
    private _fuseConfirmationService: FuseConfirmationService
    )
    {
        
    }

    ngOnInit(): void {
        this.fetch();
        this.getUser();
    }

    getUser() {
        this.user = this._auth.getUser();
    }

    fetch() {
        this.shopLoading = true;
        this._consumer.search(this.keyword)
          .subscribe((store: any) => {
            this.records = store.result;
            this.shopLoading = false;
          });
    }

    tConvert(time) {
        return this._common.tConvert(time);
    }

    chooseStore(store){
        this._consumer.setSelectedStore(store);
        this._router.navigate(['/stores/' + store.id])
    }

    login () {
        this._router.navigateByUrl('/sign-in?redirectURL=stores');
    }

    logout() {
        this._auth.logout()
        .subscribe(()=>{
            this.getUser();
        });
    }

    track(){
        this._consumer.track(this.trackOrderNumber)
        .subscribe((response: any) => {
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
              });
        },
        (response: any) => {
            this._fuseConfirmationService.open(
                {
                  title      : response.error['message'],
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
              });
        })
        
    }
}
