import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.page.html',
  styleUrls: ['./order-detail.page.scss'],
})
export class OrderDetailPage implements OnInit {

  constructor() { }

  services = [
    {
      id:1,
    title: 'Haircut'
    },
    {
      id:1,
    title: 'Clean Shave'
    },
  ]
  ngOnInit() {
    console.log('order detail')
  }

}
