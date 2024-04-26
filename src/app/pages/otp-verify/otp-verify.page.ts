import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgxOtpInputConfig } from 'ngx-otp-input';

@Component({
  selector: 'app-otp-verify',
  templateUrl: './otp-verify.page.html',
  styleUrls: ['./otp-verify.page.scss'],
})
export class OtpVerifyPage  {
  constructor() { };
  otpInputConfig: any = {
    otpLength: 4,
    autoFocus: true,
     }

     otpValue:any;
     isValidOTP: boolean = false;


  otpvalues(event:any){
    // console.log('event', event)
   this.otpValue = event.join();
    this.otpValue = this.otpValue.replace(/,/g, ''); // For removing ',';   
    this.isValidOTP = this.otpValue.length === 4;
    console.log('val', this.otpValue)
  }

}
