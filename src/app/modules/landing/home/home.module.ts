import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SettingsModule } from 'app/layout/common/settings/settings.module';
import { LandingHomeComponent } from 'app/modules/landing/home/home.component';
import { landingHomeRoutes } from 'app/modules/landing/home/home.routing';
import { StoreComponent } from './customer/public/store.component';
import { FuseLoadingBarModule } from '@fuse/components/loading-bar';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { CheckoutComponent } from './customer/public/checkout.component';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FuseAlertModule } from '@fuse/components/alert';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
    declarations: [
        LandingHomeComponent,
        StoreComponent,
        CheckoutComponent
    ],
    imports     : [
        RouterModule.forChild(landingHomeRoutes),
        CommonModule,
        SettingsModule,
        FuseLoadingBarModule,
        MatButtonModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatRadioModule,
        MatSelectModule,
        MatSlideToggleModule,
        FuseAlertModule,
        ReactiveFormsModule,
        MatSnackBarModule,
        FormsModule,
        MatProgressSpinnerModule
        
    ]
})
export class LandingHomeModule
{
}
