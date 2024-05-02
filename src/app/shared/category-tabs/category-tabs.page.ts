import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { CustomPopoverPage } from '../custom-popover/custom-popover.page';

@Component({
  selector: 'app-category-tabs',
  templateUrl: './category-tabs.page.html',
  styleUrls: ['./category-tabs.page.scss'],
})
export class CategoryTabsPage implements OnInit {
   show = true;
   selectedItem:any;
   propertyName:any;

   @Output() value = new EventEmitter<any>();
  constructor(private popoverController: PopoverController) { }
  chips = [
    {
      id:1,
      name: "Recommended",
    },
    {
      id:2,
      name: "Packages",
    },
    {
      id:3,
      name: "Face care",
    },
    {
      id:4,
      name: "Face trim",
    },
    {
      id:5,
      name: "Face care",
    },
  ]
  ngOnInit() {
    console.log('tabs')
  }
  async presentPopover(ev: any) { 
  
    const popover = await this.popoverController.create({
      component: CustomPopoverPage,
      event: ev,
      translucent: true
    });   
 
    this.show = false;

    popover.onDidDismiss().then(() => {
      this.show = true;
    });
    return await popover.present();
  }

  selectTab(item:any){
    this.selectedItem = item.id;
    this.propertyName = item.name;
    this.value.emit(item.name)
    console.log('item', this.selectedItem)
  }
}
