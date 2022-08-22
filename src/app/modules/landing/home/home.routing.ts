import { Route } from '@angular/router';
import { LandingHomeComponent } from 'app/modules/landing/home/home.component';
import { CheckoutComponent } from './customer/public/checkout.component';
import { StoreComponent } from './customer/public/store.component';

export const landingHomeRoutes: Route[] = [
    {
        path     : '',
        component: LandingHomeComponent
    },
    {
        path: ':id',
        component: StoreComponent
    },
    {
        path: ':id/checkout',
        component: CheckoutComponent
    }
];
