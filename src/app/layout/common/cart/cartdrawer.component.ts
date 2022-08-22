import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { FuseConfigService } from '@fuse/services/config';
import { AppConfig, Scheme, Theme, Themes } from 'app/core/config/app.config';
import { Layout } from 'app/layout/layout.types';
import { ConsumerService } from 'app/shared/services/consumer.service';
import { Cart } from './cart.model';
import { AuthService } from 'app/shared/services/auth.service';

@Component({
    selector     : 'cartdrawer',
    templateUrl  : './cartdrawer.component.html',
    styles       : [
        `
            cartdrawer {
                position: static;
                display: block;
                flex: none;
                width: auto;
            }
        `
    ],
    encapsulation: ViewEncapsulation.None
})
export class CartDrawerComponent implements OnInit, OnDestroy
{
    config: AppConfig;
    private _unsubscribeAll: Subject<any> = new Subject<any>();

    /**
     * Constructor
     */
    constructor(
        private _fuseConfigService: FuseConfigService,
        private _consumer: ConsumerService,
        private _auth: AuthService,
        private _router: Router
    )
    {
    }
    cart: Cart;
    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void
    {
        // Subscribe to config changes
        this._fuseConfigService.config$
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((config: AppConfig) => {
                this.config = config;
            });
        this._consumer.cart$
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((cart: Cart) => {
                this.cart = cart;
            });
    }

    /**
     * On destroy
     */
    ngOnDestroy(): void
    {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next(null);
        this._unsubscribeAll.complete();
    }

    deduct(product_id) {
        this._consumer.itemQuantityDeduct(product_id);
    }
    add(product_id) {
        this._consumer.itemQuantityAdd(product_id);
    }
    remove(product_id) {
        this._consumer.itemRemove(product_id);
    }

    checkout() {
        if (this._auth.isAuthenticated()) {
            this._router.navigateByUrl('/stores/' + this.cart.store.id + '/checkout');
        } else {
            alert('not authenticate');
        }
    }

   
}
