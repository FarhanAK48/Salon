import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';


import { SalonOffersPage } from './salon-offers.page';
import { CartButtonPageModule } from '../cart-button/cart-button.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CartButtonPageModule
  ],
  declarations: [SalonOffersPage],
  exports: [SalonOffersPage]
 })
export class SalonOffersPageModule {}
