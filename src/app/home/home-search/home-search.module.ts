import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeSearchPageRoutingModule } from './home-search-routing.module';

import { HomeSearchPage } from './home-search.page';
import { SearchServicesPageModule } from '../../shared/search-services/search-services.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeSearchPageRoutingModule,
    SearchServicesPageModule,
    ReactiveFormsModule
   
  ],
  declarations: [HomeSearchPage]
})
export class HomeSearchPageModule {}
