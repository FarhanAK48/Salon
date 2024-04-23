import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-haircut',
  templateUrl: './haircut.page.html',
  styleUrls: ['./haircut.page.scss'],
})
export class HaircutPage implements OnInit {

  constructor() { }
services = [
  {
    id:1,
  },
  {
    id:2,
  }
]
  ngOnInit() {
  }

}
