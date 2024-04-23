import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-sort',
  templateUrl: './home-sort.page.html',
  styleUrls: ['./home-sort.page.scss'],
})
export class HomeSortPage implements OnInit {
  constructor() { }
  selectedOption: string = 'Sort';
  selectedSort:string = '';
  selectedGender:string = '';
  filterCategory = [
    {
      id: 1,
      title: 'Sort'
    },
    {
      id: 2,
      title: 'Offers'
    },
    {
      id: 3,
      title: 'Gender'
    },
    {
      id: 4,
      title: 'Timing'
    },

  ]

  sortOptions = [
    {
      id: 1,
      title: 'Popularity',
    },
    {
      id: 2,
      title: 'Rating: High to Low',
    },
    {
      id: 3,
      title: 'Cost: Hight to Low',
    },
    {
      id: 4,
      title: 'Cost: Low to High',
    },
  ]

  genderOptions = [
    {
      id: 1,
      title: 'Male',
    },
    {
      id: 2,
      title: 'Female',
    }

  ]
  ngOnInit() {
    console.log('Home Sort')
  }

  selectOption(val: any) {
    this.selectedOption = val.title;
  }

  sortSelect(item:any){
    this.selectedSort = item.title;
  }

  genderSelect(item:any){
    this.selectedGender = item.title;
  }
}
