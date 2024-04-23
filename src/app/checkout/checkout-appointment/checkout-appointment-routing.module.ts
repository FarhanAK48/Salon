import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CheckoutAppointmentPage } from './checkout-appointment.page';

const routes: Routes = [
  {
    path: '',
    component: CheckoutAppointmentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CheckoutAppointmentPageRoutingModule {}
