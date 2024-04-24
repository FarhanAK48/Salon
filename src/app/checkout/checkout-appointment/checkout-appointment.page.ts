import { Component, OnInit } from '@angular/core';
interface Times {
  id: number,
  time: string,

}
@Component({
  selector: 'app-checkout-appointment',
  templateUrl: './checkout-appointment.page.html',
  styleUrls: ['./checkout-appointment.page.scss'],
})
export class CheckoutAppointmentPage implements OnInit {

  constructor() { }
  selectedItem: any;
  selectedTime: any;
  serviceDate = [
    {
      id: 1,
      day: 'Sat',
      date: '19'
    },
    {
      id: 2,
      day: 'Sun',
      date: '20'
    },
    {
      id: 3,
      day: 'Mon',
      date: '21'
    },
    {
      id: 4,
      day: 'Tue',
      date: '22'
    },
    {
      id: 5,
      day: 'Wed',
      date: '23'
    },
  ]

  serviceTime: Times[] = [
    {
      id: 1,
      time: '10:00 AM',

    },
    {
      id: 2,
      time: '10:30 AM',

    },
    {
      id: 3,
      time: '11:00 PM',

    },
    {
      id: 4,
      time: '11:30 PM',

    },
    {
      id: 5,
      time: '12:00 PM',

    },
    {
      id: 6,
      time: '12:30 PM',

    },
    {
      id: 7,
      time: '1:00 PM',

    },
    {
      id: 8,
      time: '01:00 PM',

    },
  ]

  ngOnInit() {
    console.log('Appointment')
  }

  selectItem(val: any) {
    console.log('selectedDate', val.id)
    this.selectedItem = val.id;
  }

  selectTime(val: any) {
    console.log('selectedTime', val.id)
    this.selectedTime = val.id
  }

}
