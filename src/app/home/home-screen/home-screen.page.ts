import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocationService } from '../location/location.service';

@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.page.html',
  styleUrls: ['./home-screen.page.scss'],
})
export class HomeScreenPage implements OnInit {

  constructor(private router: Router, private locationSer:LocationService) { }
  location:any;
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
    this.locationSer.locationName.subscribe(name => {
      this.location = name;
      console.log(name);
    })
  }

  onNavigate(){
    this.router.navigate(['/location'])
  }

}
