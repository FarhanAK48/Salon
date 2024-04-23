import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ManageAddressPageRoutingModule } from './manage-address-routing.module';

import { ManageAddressPage } from './manage-address.page';
import { DeleteAddressConfirmationPageModule } from '../../shared/delete-address-confirmation/delete-address-confirmation.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ManageAddressPageRoutingModule,
    DeleteAddressConfirmationPageModule
  ],
  declarations: [ManageAddressPage]
})
export class ManageAddressPageModule {}
