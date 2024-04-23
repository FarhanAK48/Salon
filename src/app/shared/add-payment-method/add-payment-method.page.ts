import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-payment-method',
  templateUrl: './add-payment-method.page.html',
  styleUrls: ['./add-payment-method.page.scss'],
})
export class AddPaymentMethodPage implements OnInit {

  constructor() { }
  paymentMethods = [
    {
      id: 1,
      img: '/assets/icon/apple-pay.svg',
      title: 'Apple Pay',
      icon: 'assets/icon/forward.svg'
    },
    {
      id: 2,
      img: '/assets/icon/paypal.svg',
      title: 'PayPal',
      icon: 'assets/icon/forward.svg'
    },
    {
      id: 3,
      img: '/assets/icon/credit-32.svg',
      title: 'Credit or debit card',
      icon: 'assets/icon/forward.svg'
    },
    {
      id: 4,  
      img: '/assets/icon/gift-card.svg', 
      title: 'Gift Card',
      icon: 'assets/icon/forward.svg'

     
    }

  ]
  ngOnInit() {
    console.log('add apyment method')
  }

}
