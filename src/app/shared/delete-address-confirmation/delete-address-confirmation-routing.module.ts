import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeleteAddressConfirmationPage } from './delete-address-confirmation.page';

const routes: Routes = [
  {
    path: '',
    component: DeleteAddressConfirmationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeleteAddressConfirmationPageRoutingModule {}
