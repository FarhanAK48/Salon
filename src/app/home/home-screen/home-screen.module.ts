import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeScreenPageRoutingModule } from './home-screen-routing.module';

import { HomeScreenPage } from './home-screen.page';
import { HomeTabsPageModule } from '../../shared/home-tabs/home-tabs.module';
import { HomeSortPageModule } from '../../shared/home-sort/home-sort.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeScreenPageRoutingModule,
    HomeTabsPageModule,
    HomeSortPageModule
  ],
  declarations: [HomeScreenPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeScreenPageModule {}
