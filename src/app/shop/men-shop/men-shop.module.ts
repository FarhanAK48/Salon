import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenShopPageRoutingModule } from './men-shop-routing.module';

import { MenShopPage } from './men-shop.page';
import { SalonOffersPageModule } from '../../shared/salon-offers/salon-offers.module';
import { CategoryTabsPageModule } from '../../shared/category-tabs/category-tabs.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenShopPageRoutingModule,
    CategoryTabsPageModule,
    SalonOffersPageModule, 
  
  ],
  declarations: [MenShopPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MenShopPageModule {}
