import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LogoutPageRoutingModule } from './logout-routing.module';

import { LogoutPage } from './logout.page';
import { LogoutConfirmationPageModule } from '../../shared/logout-confirmation/logout-confirmation.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LogoutPageRoutingModule,
    LogoutConfirmationPageModule
  ],
  declarations: [LogoutPage]
})
export class LogoutPageModule {}
