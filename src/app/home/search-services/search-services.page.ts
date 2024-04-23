import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-services',
  templateUrl: './search-services.page.html',
  styleUrls: ['./search-services.page.scss'],
})
export class SearchServicesPage implements OnInit {

  constructor() { }
types = [
  {
    id:1,
    title: 'Haircut for Men',
    total:'122 Results'
  },
  {
    id:2,
    title: 'Haircut for Women',
    total:'122 Results'
  },
]

resultList = [
  {
    id:1,
    title: 'For Men',
    name:'Miko Salon',
    address: 'Ranchview'
  },
  {
    id:2,
    title: 'For Men',
    name:'Miko Salon',
    address: 'Ranchview'
  },
  {
    id:3,
    title: 'For Men',
    name:'Miko Salon',
    address: 'Ranchview'
  },
]
  ngOnInit() {
  }

}
