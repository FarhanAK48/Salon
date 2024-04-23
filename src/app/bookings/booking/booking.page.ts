import { Component, OnInit } from '@angular/core';
interface Booking{
  id:number,
  title:string,
  value:string,

}
@Component({
  selector: 'app-booking',
  templateUrl: './booking.page.html',
  styleUrls: ['./booking.page.scss'],
})
export class BookingPage implements OnInit {

  constructor() { }
  selectedSegment:any;
  // bookingTabs:Booking[] = [
  //   {
  //     id:1,
  //     title:'Past',
  //     value:'past',

  //   },
  //   {
  //     id:2,
  //     title:'Upcoming',
  //     value:'upcoming',

  //   },
  //   {
  //     id:3,
  //     title:'Favorites',
  //     value:'favorites',

  //   },
  // ]
  segmentChanged(){
    console.log('Name of tab',this.selectedSegment);
  }

  ngOnInit() {
    console.log('booking');
  }
  // getType(obj:any){
  //   console.log('Name of tab',obj);
  // }
  tabChanged(val:any){
    console.log('value', val)
  }
}
