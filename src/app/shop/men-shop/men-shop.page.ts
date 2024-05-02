import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { CustomPopoverPage } from '../../shared/custom-popover/custom-popover.page';

@Component({
  selector: 'app-men-shop',
  templateUrl: './men-shop.page.html',
  styleUrls: ['./men-shop.page.scss'],
})
export class MenShopPage implements OnInit {

  constructor() { }
  men:any=false;
 selectedTab!:any;
  ngOnInit() {
    console.log('men-salon');
  }

  selectTab(item:any){
    console.log('C to P',item)
    this.selectedTab = item;
  }




}
