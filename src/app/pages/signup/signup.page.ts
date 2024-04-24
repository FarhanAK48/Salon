import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  constructor() { }
  registerForm!: FormGroup;


  ngOnInit() {

    this.registerForm = new FormGroup({
      name: new FormControl('',Validators.required),
      email: new FormControl('',[ Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    })
  }

}
