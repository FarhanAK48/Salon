import { Component, OnInit } from '@angular/core';
interface Times{
  id:number,
  hour:string,
  min:string,
}
@Component({
  selector: 'app-checkout-appointment',
  templateUrl: './checkout-appointment.page.html',
  styleUrls: ['./checkout-appointment.page.scss'],
})
export class CheckoutAppointmentPage implements OnInit {

  constructor() { }

  serviceTime:Times[]=[
    {
      id:1,
      hour:'10:00 AM',
      min: '10:30 AM'
    },
    {
      id:2,
      hour:'11:00 AM',
      min: '11:30 AM'
    },
    {
      id:3,
      hour:'12:00 PM',
      min: '12:30 PM'
    },
    {
      id:4,
      hour:'01:00 PM',
      min: '01:30 PM'
    },
  ]

  ngOnInit() {
    console.log('Appointment')
  }

}
