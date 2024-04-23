import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.page.html',
  styleUrls: ['./otp.page.scss'],
})
export class OtpPage implements OnInit {

  constructor() { }
  otpForm!: FormGroup;
  ngOnInit() {

    this.otpForm =new FormGroup({
          number: new FormControl('',Validators.required),
         
        })
  }

}
