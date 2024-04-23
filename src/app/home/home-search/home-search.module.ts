import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeSearchPageRoutingModule } from './home-search-routing.module';

import { HomeSearchPage } from './home-search.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeSearchPageRoutingModule,
   
  ],
  declarations: [HomeSearchPage]
})
export class HomeSearchPageModule {}
