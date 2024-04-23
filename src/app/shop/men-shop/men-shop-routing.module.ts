import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenShopPage } from './men-shop.page';

const routes: Routes = [
  {
    path: '',
    component: MenShopPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenShopPageRoutingModule {}
