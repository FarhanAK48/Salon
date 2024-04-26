import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-popover',
  templateUrl: './custom-popover.page.html',
  styleUrls: ['./custom-popover.page.scss'],
})
export class CustomPopoverPage implements OnInit {

  constructor() { }
  selectedItem:any;
  itemArr = [
    {
      id:1,
      name: 'Recomended',
      value: 5
    },
    {
      id:2,
      name: 'massage',
      value: 5
    },
    {
      id:3,
      name: 'Hair care',
      value: 7
    }, {
      id:4,
      name: 'Barber',
      value: 15
    },
    {
      id:5,
      name: 'Facial',
      value: 12
    },
  
  ]

  ngOnInit() {
    console.log('popover');
  }

  selectItem(item:any){
    this.selectedItem = item.id;
  }

}
