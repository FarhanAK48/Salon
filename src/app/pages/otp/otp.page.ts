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
  phoneNumber: string = '';
  ngOnInit() {

    this.otpForm = new FormGroup({
      number: new FormControl('', Validators.required),
    })
  }


  formatNumber(event: any) {
    let formattedNumber = event.target.value.replace(/\D/g, '');
    console.log('1**', formattedNumber);
    if (formattedNumber.startsWith('1')) {
      formattedNumber = '+1' + formattedNumber.substring(1);
      console.log('2**', formattedNumber)
    }
    if (formattedNumber.startsWith('+')) {
      formattedNumber = `(${formattedNumber.substring(0, 2)}) - ${formattedNumber.substring(2)}`;
      console.log('3**', formattedNumber)
    }
    this.otpForm.patchValue({
      number: formattedNumber
    });
  }
}
