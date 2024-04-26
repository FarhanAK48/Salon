import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-logout-confirmation',
  templateUrl: './logout-confirmation.page.html',
  styleUrls: ['./logout-confirmation.page.scss'],
})
export class LogoutConfirmationPage implements OnInit {

  constructor(private modelControl:ModalController) { }

  ngOnInit() {
    console.log('logout confirmation')
  }

  close(){
    this.modelControl.dismiss();
  }

}
