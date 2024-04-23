import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';


import { DeleteAddressConfirmationPage } from './delete-address-confirmation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
  ],
  declarations: [DeleteAddressConfirmationPage],
  exports: [DeleteAddressConfirmationPage]
})
export class DeleteAddressConfirmationPageModule {}
