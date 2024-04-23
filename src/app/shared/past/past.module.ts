import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';


import { PastPage } from './past.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
   
  ],
  declarations: [PastPage],
  exports: [PastPage]
})
export class PastPageModule {}
