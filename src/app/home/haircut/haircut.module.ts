import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HaircutPageRoutingModule } from './haircut-routing.module';

import { HaircutPage } from './haircut.page';
import { HomeTabsPageModule } from '../../shared/home-tabs/home-tabs.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HaircutPageRoutingModule,
    HomeTabsPageModule
  ],
  declarations: [HaircutPage]
})
export class HaircutPageModule {}
