import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.page.html',
  styleUrls: ['./home-screen.page.scss'],
})
export class HomeScreenPage implements OnInit {

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

  services = [
    {
      image: '/assets/images/haircut-men.png',
      label: 'Haircut for men'
    },
    {
      image: '/assets/images/shave.png',
      label: 'Haircut for men'
    },
    {
      image: '/assets/images/haircut-men.png',
      label: 'Haircut for men'
    },
    {
      image: '/assets/images/bleach.png',
      label: 'Haircut for men'
    },
    {
      image: '/assets/images/waxing.png',
      label: 'Haircut for men'
    },
    {
      image: '/assets/images/facial.png',
      label: 'Haircut for men'
    },
  ]

  slider = [
    {
      id:1
    },
    {
      id:2
    },
    {
      id:3
    },
  ]
  ngOnInit() {
    console.log('home-screen');
  }

}
