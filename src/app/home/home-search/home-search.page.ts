import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-search',
  templateUrl: './home-search.page.html',
  styleUrls: ['./home-search.page.scss'],
})
export class HomeSearchPage implements OnInit {

  constructor() { }

  searches = [
    {
      id:1,
      title: 'Haircut',
    },
    {
      id:2,
      title: 'Shave',
    },
  ]
 trendingCards = [
  {
    id:1,
  },
  {
    id:2,
  }
 ]

 services = [
  {
    id:1,
    img:'/assets/images/haircut-men.png',
    title: 'Haircut for men'
  },
  {
    id:2,
    img:'/assets/images/shave.png',
    title: 'Shave for men'
  },
  {
    id:3,
    img:'/assets/images/haircut-men.png',
    title: 'Massage for Men'
  },

 ]

  ngOnInit() {
    
  }

}
