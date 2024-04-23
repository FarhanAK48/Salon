import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-past',
  templateUrl: './past.page.html',
  styleUrls: ['./past.page.scss'],
})
export class PastPage implements OnInit {
@Input() type:any;
  constructor() { }
  // types= 'upcoming';
  pastBooking = [
    {
      id:1,
      title:'Woodlands Hills Salon'
    },
    {
      id:1,
      title:'Woodlands Hills Salon'
    },
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
    console.log('Past page', this.type);
  }

}
