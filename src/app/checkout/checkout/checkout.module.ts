import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CheckoutPageRoutingModule } from './checkout-routing.module';

import { CheckoutPage } from './checkout.page';
import { LogoutConfirmationPageModule } from '../../shared/logout-confirmation/logout-confirmation.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CheckoutPageRoutingModule, 
    LogoutConfirmationPageModule
  ],
  declarations: [CheckoutPage]
})
export class CheckoutPageModule {}
