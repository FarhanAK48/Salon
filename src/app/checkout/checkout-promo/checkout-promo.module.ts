import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CheckoutPromoPageRoutingModule } from './checkout-promo-routing.module';

import { CheckoutPromoPage } from './checkout-promo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CheckoutPromoPageRoutingModule
  ],
  declarations: [CheckoutPromoPage]
})
export class CheckoutPromoPageModule {}
