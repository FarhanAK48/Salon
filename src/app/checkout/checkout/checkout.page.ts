import {  Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.page.html',
  styleUrls: ['./checkout.page.scss'],
})
export class CheckoutPage  {

  qp:any;
  constructor(private route: ActivatedRoute, private router:Router) { }
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


  ionViewWillEnter(){
    this.qp = this.route.snapshot.queryParams['type'];
    console.log('QP',this.qp)
  }

 
  onNavigate(){
    this.router.navigate(['/checkout-promo'])
  }
  navToAppointment(){
    this.router.navigate(['/checkout-appointment'])

  }
}
