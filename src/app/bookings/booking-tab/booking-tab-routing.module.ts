import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BookingTabPage } from './booking-tab.page';

const routes: Routes = [
  {
    path: '',
    component: BookingTabPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookingTabPageRoutingModule {}
