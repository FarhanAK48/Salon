import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';


import { LogoutConfirmationPage } from './logout-confirmation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
  ],
  declarations: [LogoutConfirmationPage],
  exports: [LogoutConfirmationPage]
})
export class LogoutConfirmationPageModule {}
