import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CustomPopoverPageRoutingModule } from './custom-popover-routing.module';

import { CustomPopoverPage } from './custom-popover.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CustomPopoverPageRoutingModule
  ],
  declarations: [CustomPopoverPage]
})
export class CustomPopoverPageModule {}
