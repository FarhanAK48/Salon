import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-tabs',
  templateUrl: './home-tabs.page.html',
  styleUrls: ['./home-tabs.page.scss'],
})
export class HomeTabsPage implements OnInit {

  constructor() { }
  chips = [
    {
      end: '/assets/icon/down-arrow.svg',
      label: 'Gender',
    },
    {
      end: '/assets/icon/down-arrow.svg',
      label: 'Price',
    },
    {
      start: '/assets/icon/percent-outline.svg',
      label: 'Offers',
    },
    {
      start: '/assets/icon/search-blue.svg',
      label: 'Order',
    },
    {
      start: '/assets/icon/search-blue.svg',
      label: 'Order',
    }
  ]
  ngOnInit() {
    console.log('home-tabs');
  }

}
