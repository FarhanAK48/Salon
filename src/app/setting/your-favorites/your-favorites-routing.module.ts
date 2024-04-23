import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { YourFavoritesPage } from './your-favorites.page';

const routes: Routes = [
  {
    path: '',
    component: YourFavoritesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class YourFavoritesPageRoutingModule {}
