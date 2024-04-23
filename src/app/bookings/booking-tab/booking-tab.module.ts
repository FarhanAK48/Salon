import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BookingTabPageRoutingModule } from './booking-tab-routing.module';

import { BookingTabPage } from './booking-tab.page';
import { PastPageModule } from '../../shared/past/past.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BookingTabPageRoutingModule,
    PastPageModule
  ],
  declarations: [BookingTabPage]
})
export class BookingTabPageModule {}
