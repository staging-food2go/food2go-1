import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SettingsModule } from 'app/layout/common/settings/settings.module';
import { LandingHomeComponent } from 'app/modules/landing/home/home.component';
import { landingHomeRoutes } from 'app/modules/landing/home/home.routing';
import { StoreComponent } from './customer/public/store.component';

@NgModule({
    declarations: [
        LandingHomeComponent,
        StoreComponent
    ],
    imports     : [
        RouterModule.forChild(landingHomeRoutes),
        CommonModule,
        SettingsModule
    ]
})
export class LandingHomeModule
{
}
