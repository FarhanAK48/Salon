import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements OnInit {

  constructor() { }

  sliderItem= [
    {
      img:'assets/images/img1.png',
      text: 'Schedule your Appointment with the best Hair Stylist in your Town',
    },
    {
      img:'assets/images/img2.png',
      text: 'Schedule your Appointment in the best Salon for your Kids',
    },
    {
      img:'assets/images/img3.png',
      text: 'Book yourself a massage therapist to release all your stress',
    },
    {
      img:'assets/images/img4.png',
      text: 'Search for the best parlour near you to fullfill all your beauty needs',
    }
  ]

  ngOnInit() {
    console.log('images')
  }

}
