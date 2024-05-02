import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-salon-offers',
  templateUrl: './salon-offers.page.html',
  styleUrls: ['./salon-offers.page.scss'],
})
export class SalonOffersPage implements OnInit {
  selectedSection = 'Recommended';
  @Input() tabVal: any;
  selectedItems: any[] = [];
  total: number = 0;

   itemsObject = {   
    totalItem: 0,
    totalPrice: 0
};

  constructor() { }
  // chips = [
  //   {
  //     id:1,
  //     name: "Recommended",
  //   },
  //   {
  //     id:2,
  //     name: "Packages",
  //   },
  //   {
  //     id:1,
  //     name: "Face care",
  //   },
  //   {
  //     id:1,
  //     name: "Face trim",
  //   },
  //   {
  //     id:1,
  //     name: "Face care",
  //   },
  // ]

  recList = [
    { id: 1, img: '../../../assets/images/recomend1.png', title: 'Haircut', price: '40', time: '30' },
    { id: 2, img: '../../../assets/images/recommend2.png', title: 'Body Massage', price: '30', time: '30' },
    { id: 3, img: '../../../assets/images/recommend3.png', title: 'Active Detox CleaUp', price: '45', time: '30' },
  ];

  faceCare = [
    { id: 1, img: '../../../assets/images/recomend1.png', title: 'Facial', price: '20', time: '30' },
    { id: 2, img: '../../../assets/images/recommend2.png', title: 'Body Massage', price: '45', time: '30' },
    { id: 3, img: '../../../assets/images/recommend3.png', title: 'Active Detox CleaUp', price: '40', time: '30' },
  ];
  faceTrim = [
    { id: 1, img: '../../../assets/images/recomend1.png', title: 'Trim', price: '40', time: '30' },
    { id: 2, img: '../../../assets/images/recommend2.png', title: 'Body Massage', price: '40', time: '30' },
    { id: 3, img: '../../../assets/images/recommend3.png', title: 'Active Detox CleaUp', price: '40', time: '30' },
  ];

  packageList = [
    { id: 1, img: '../../../assets/images/recomend1.png', title: 'Haircut & Shave', price: '40', time: '30' },
    { id: 2, img: '../../../assets/images/recommend2.png', title: 'Haircut & Beared', price: '40', time: '30' },
    { id: 3, img: '../../../assets/images/recommend3.png', title: 'Haircut', price: '40', time: '30' },
  ]

  data: { [key: string]: any } = { 'Recommended': this.recList, 'Packages': this.packageList, 'Face care': this.faceCare, 'Face trim': this.faceTrim };
  orderKeys = ['Recommended', 'Packages', 'Face care', 'Face trim']

  //  data = [
  //    { type: 'recommended', items: this.recList },
  //    { type: 'packages', items: this.packageList },s
  // ];
  // sortedData: { type: any; items: any[]; }[] = [];
  ngOnInit() {



    console.log('shop')
    //  const array = [1, 2, 3, 4, 5];





  }

  ngOnChanges(changes: any) {
    console.log('change', changes.tabVal?.currentValue)
    let val = changes.tabVal?.currentValue;

    console.log('change', val?.toLowerCase())
    const indexToRemove = this.orderKeys.indexOf(val); // Find the index of the element with value 2
    if (indexToRemove !== -1) { // Check if the element exists in the array
      this.orderKeys.splice(indexToRemove, 1); // Remove one element at the found index
    }
    console.log(this.orderKeys);

    this.orderKeys.unshift(val)
  }

  ionViewWillEnter() {
    console.log('TAB', this.tabVal);

  }



  getItem(item: any) {
    console.log('item', item);
    this.selectedItems.push(item);
  
    this.calculateTotal();
    this.itemsObject.totalItem= this.selectedItems.length;
    this.itemsObject.totalPrice = this.total;  
   
  }




  calculateTotal() {
    this.total = this.selectedItems.reduce((prev:any, nextEl:any) => prev + parseFloat(nextEl.price), 0); // 0 in this function is for prev = 0;
  }



}
