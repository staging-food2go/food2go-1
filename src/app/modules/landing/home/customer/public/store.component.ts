import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'app/shared/services/auth.service';
import { CommonService } from 'app/shared/services/common.service';
import { ConsumerService } from 'app/shared/services/consumer.service';
import { NotificationService } from 'app/shared/services/notify.service';
import { UserService } from 'app/shared/services/user.service';

@Component({
    selector     : 'landing-store',
    templateUrl  : './store.component.html',
    styleUrls: ['./assets/css/theme.css'],
    encapsulation: ViewEncapsulation.None
})
export class StoreComponent
{
    records = [];
    keyword = '';
    today = new Date().getDay();
    shopLoading = true;
    user = [];
    store: any;

    constructor(
    private _consumer: ConsumerService,
    private _common: CommonService,
    private _router: Router,
    private _auth: AuthService,
    private _user: UserService,
    private _notify: NotificationService
    )
    {
        
    }

    ngOnInit(): void {
        this.user = this._auth.getUser();
        this.store = this._consumer.getSelectedStore();
    }


    tConvert(time) {
        return this._common.tConvert(time);
    }

    back() {
        this._router.navigateByUrl('/stores');
    }
}
