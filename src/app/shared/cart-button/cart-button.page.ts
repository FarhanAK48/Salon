import { ChangeDetectorRef, Component, Input, OnInit, SimpleChanges,   } from '@angular/core';

@Component({
  selector: 'app-cart-button',
  templateUrl: './cart-button.page.html',
  styleUrls: ['./cart-button.page.scss'],
})
export class CartButtonPage implements  OnInit {
@Input() btnData:any;
  constructor(private cdr: ChangeDetectorRef) { }
  totalItem:any ;
  totalPrice:any = 0;

  ngOnInit() {
    console.log('cart button')
  }


 
  

}
