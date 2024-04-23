import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logout-confirmation',
  templateUrl: './logout-confirmation.page.html',
  styleUrls: ['./logout-confirmation.page.scss'],
})
export class LogoutConfirmationPage implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log('logout confirmation')
  }

}
