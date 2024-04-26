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

     
  ngOnInit() {
    console.log('booking-tab')
  }

  segmentChanged(event:any) {
    this.selectedSegment= event.detail.value;
    console.log('Segment changed', event.detail.value);
  }

}
