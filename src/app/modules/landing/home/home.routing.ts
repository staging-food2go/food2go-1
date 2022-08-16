import { Route } from '@angular/router';
import { LandingHomeComponent } from 'app/modules/landing/home/home.component';
import { StoreComponent } from './customer/public/store.component';

export const landingHomeRoutes: Route[] = [
    {
        path     : '',
        component: LandingHomeComponent
    },
    {
        path: ':id',
        component: StoreComponent
    }
];
