import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';


import { AddPaymentMethodPage } from './add-payment-method.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
  ],
  declarations: [AddPaymentMethodPage],
  exports : [AddPaymentMethodPage]
})
export class AddPaymentMethodPageModule {}
