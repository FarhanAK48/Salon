import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.page.html',
  styleUrls: ['./checkout.page.scss'],
})
export class CheckoutPage implements OnInit {

  qp:any;
  constructor(private route: ActivatedRoute) { }
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
    this.qp = this.route.snapshot.queryParams['type'];
    console.log('QP',this.qp)
  }

}
