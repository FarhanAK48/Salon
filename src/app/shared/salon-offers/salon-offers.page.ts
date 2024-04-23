import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-salon-offers',
  templateUrl: './salon-offers.page.html',
  styleUrls: ['./salon-offers.page.scss'],
})
export class SalonOffersPage implements OnInit {

  constructor() { }
  chips = [
    {
      id:1,
      name: "Recommended",
    },
    {
      id:2,
      name: "Packages",
    },
    {
      id:1,
      name: "Face care",
    },
    {
      id:1,
      name: "Face trim",
    },
    {
      id:1,
      name: "Face care",
    },
  ]

  recList=[
    {id:1, img:'../../../assets/images/recomend1.png',title:'Haircut',price: '40', time:'30'},
    {id:1, img:'../../../assets/images/recommend2.png',title:'Body Massage',price: '40', time:'30'},
    {id:1, img:'../../../assets/images/recommend3.png',title:'Active Detox CleaUp',price: '40', time:'30'},
 ];

 packageList=[
  {id:1, img:'../../../assets/images/recomend1.png',title:'Haircut & Shave',price: '40', time:'30'},
  {id:1, img:'../../../assets/images/recommend2.png',title:'Haircut & Beared',price: '40', time:'30'},
  {id:1, img:'../../../assets/images/recommend3.png',title:'Haircut',price: '40', time:'30'},
]
  ngOnInit() {
    console.log('salon offers')
  }

}
