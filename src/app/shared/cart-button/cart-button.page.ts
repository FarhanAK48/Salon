import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-button',
  templateUrl: './cart-button.page.html',
  styleUrls: ['./cart-button.page.scss'],
})
export class CartButtonPage implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log('cart button')
  }

}
