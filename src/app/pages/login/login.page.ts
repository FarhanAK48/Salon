import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IonContent } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm!:FormGroup;
  @ViewChild(IonContent) content!: IonContent;
  constructor() { }

  ngOnInit() {

    this.loginForm = new FormGroup({
      email: new FormControl('',[Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),  
    })
  }

  onPasswordFieldFocus(event: any): void {
    // Scroll the content to ensure the password field is visible
    this.content.scrollToPoint(0, event.target.offsetTop, 300);
  }

}
