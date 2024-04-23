import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomPopoverPage } from './custom-popover.page';

const routes: Routes = [
  {
    path: '',
    component: CustomPopoverPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomPopoverPageRoutingModule {}
