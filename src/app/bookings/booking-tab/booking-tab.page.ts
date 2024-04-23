import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-booking-tab',
  templateUrl: './booking-tab.page.html',
  styleUrls: ['./booking-tab.page.scss'],
})
export class BookingTabPage implements OnInit {

  constructor() { }
  type= 'past';
  selectedSegment:any;
  // pastBooking = [
  //   {
  //     id:1,
  //     title:'Woodlands Hills Salon'
  //   },
  //   {
  //     id:1,
  //     title:'Woodlands Hills Salon'
  //   },
  //   {
  //     id:1,
  //     title:'Woodlands Hills Salon'
  //   },
  //   {
  //     id:1,
  //     title:'Woodlands Hills Salon'
  //   },
  //   ]
     
  ngOnInit() {
    console.log('booking-tab')
  }

  segmentChanged(event:any) {
    this.selectedSegment= event.detail.value;
    console.log('Segment changed', event.detail.value);
    // You can perform actions based on the selected segment value here
  }

}
