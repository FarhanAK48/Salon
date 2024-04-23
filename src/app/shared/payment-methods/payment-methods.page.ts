import { Component, ElementRef, Input, OnInit } from '@angular/core';
interface Payment {
  id: number,
  img?: string,
  title: string,
  icon?: string
}
@Component({
  selector: 'app-payment-methods',
  templateUrl: './payment-methods.page.html',
  styleUrls: ['./payment-methods.page.scss'],
})
export class PaymentMethodsPage implements OnInit {
@Input() type!:any;
@Input() modelId:any;
  constructor() { }

  paymentMethods: Payment[] = [
    {
      id: 1,
      img: '../../../assets/icon/apple-pay.svg',
      title: 'Apple Pay',
      icon: 'assets/icon/forward.svg'
    },
    {
      id: 2,
      img: '../../../assets/icon/cash.svg',
      title: 'Cash',
      icon: 'assets/icon/forward.svg'
    },
    {
      id: 3,
      img: '../../../assets/icon/visa.svg',
      title: '4153 xxxx xxxxx 0981',
      icon: 'assets/icon/forward.svg'
    },
 

  ]

  ngOnInit() {
    console.log('payment-methods', this.type);
  }

}
