import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaymentMethodPageRoutingModule } from './payment-method-routing.module';

import { PaymentMethodPage } from './payment-method.page';
import { PaymentMethodsPageModule } from '../../shared/payment-methods/payment-methods.module';
import { AddPaymentMethodPageModule } from '../../shared/add-payment-method/add-payment-method.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaymentMethodPageRoutingModule,
    PaymentMethodsPageModule,
    AddPaymentMethodPageModule
  ],
  declarations: [PaymentMethodPage]
})
export class PaymentMethodPageModule {}
