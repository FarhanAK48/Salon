import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-your-favorites',
  templateUrl: './your-favorites.page.html',
  styleUrls: ['./your-favorites.page.scss'],
})
export class YourFavoritesPage implements OnInit {

  constructor() { }
  pastBooking = [
    {
      id:1,
      title:'Woodlands Hills Salon'
    },
    {
      id:1,
      title:'Woodlands Hills Salon'
    },
  
    ]
  ngOnInit() {
  }

}
