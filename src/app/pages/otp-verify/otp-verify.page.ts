import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-otp-verify',
  templateUrl: './otp-verify.page.html',
  styleUrls: ['./otp-verify.page.scss'],
})
export class OtpVerifyPage implements OnInit {
  otpVerifyForm!:FormGroup;
  constructor() { }

  ngOnInit() {

    this.otpVerifyForm = new FormGroup({
      a: new FormControl('',Validators.required),
      b: new FormControl('', Validators.required),
      c: new FormControl('', Validators.required),
      d: new FormControl('', Validators.required),
    })
  }

}
