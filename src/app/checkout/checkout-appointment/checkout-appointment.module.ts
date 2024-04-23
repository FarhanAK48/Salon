import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CheckoutAppointmentPageRoutingModule } from './checkout-appointment-routing.module';

import { CheckoutAppointmentPage } from './checkout-appointment.page';
import { PaymentMethodsPageModule } from '../../shared/payment-methods/payment-methods.module';
import { CartButtonPageModule } from '../../shared/cart-button/cart-button.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CheckoutAppointmentPageRoutingModule,
    PaymentMethodsPageModule,
    CartButtonPageModule
  ],
  declarations: [CheckoutAppointmentPage]
})
export class CheckoutAppointmentPageModule {}
