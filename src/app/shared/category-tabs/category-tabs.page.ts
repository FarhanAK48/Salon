import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { CustomPopoverPage } from '../custom-popover/custom-popover.page';

@Component({
  selector: 'app-category-tabs',
  templateUrl: './category-tabs.page.html',
  styleUrls: ['./category-tabs.page.scss'],
})
export class CategoryTabsPage implements OnInit {

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
      id:1,
      name: "Face care",
    },
    {
      id:1,
      name: "Face trim",
    },
    {
      id:1,
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
    return await popover.present();
  }
}
