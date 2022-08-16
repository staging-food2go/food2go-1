import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { FuseConfigService } from '@fuse/services/config';
import { AppConfig, Scheme, Theme, Themes } from 'app/core/config/app.config';
import { Layout } from 'app/layout/layout.types';

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
        private _fuseConfigService: FuseConfigService
    )
    {
    }

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

                // Store the config
                this.config = config;
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

   
}
