import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.page.html',
  styleUrls: ['./checkout.page.scss'],
})
export class CheckoutPage implements OnInit {

  constructor() { }
  services = [
    {
      id:1,
      title: 'Haircut',
      amount: '160',
      charges: '180'

    },
    {
      id:2,
      title: 'Clean Shave',
      amount: '150',
      charges: '160'

    }
  ]

  ngOnInit() {
    console.log('checkout');
  }

}
