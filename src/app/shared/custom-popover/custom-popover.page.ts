import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-popover',
  templateUrl: './custom-popover.page.html',
  styleUrls: ['./custom-popover.page.scss'],
})
export class CustomPopoverPage implements OnInit {

  constructor() { }
  itemArr = [
    {
      id:1,
      name: 'massage',
      value: 5
    },
    {
      id:2,
      name: 'Hair care',
      value: 7
    }, {
      id:3,
      name: 'Barber',
      value: 15
    },
    {
      id:4,
      name: 'Facial',
      value: 12
    },
  
  ]

  ngOnInit() {
    console.log('popover');
  }

}
