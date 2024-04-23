import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CheckoutPromoPage } from './checkout-promo.page';

const routes: Routes = [
  {
    path: '',
    component: CheckoutPromoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CheckoutPromoPageRoutingModule {}
