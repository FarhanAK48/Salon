import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
interface VisaCard {
  id: number;
  img: string;
  cashback: string;
};

@Component({
  selector: 'app-checkout-promo',
  templateUrl: './checkout-promo.page.html',
  styleUrls: ['./checkout-promo.page.scss'],
})

export class CheckoutPromoPage implements OnInit {

  constructor(private router:Router) { }

  visaArr:VisaCard[] = [
    {
      id:1,
      img:'/assets/images/visa.png',
      cashback: 'Get cashback upto $40 on VISA Debit or Credit cards'

    },
    {
      id:2,
      img:'/assets/images/visa.png',
      cashback: 'Get cashback upto $40 on VISA Debit or Credit cards'

    }
  ]

  ngOnInit() {
    console.log('promo')
 
  }

  onNavigate(){
    this.router.navigate(['/checkout'], {queryParams : {type: 'apply'}})
  }

}
