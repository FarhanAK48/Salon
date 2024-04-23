import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OtpVerifyPageRoutingModule } from './otp-verify-routing.module';

import { OtpVerifyPage } from './otp-verify.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OtpVerifyPageRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [OtpVerifyPage]
})
export class OtpVerifyPageModule {}
