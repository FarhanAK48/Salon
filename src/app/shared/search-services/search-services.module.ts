import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';


import { SearchServicesPage } from './search-services.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,

  ],
  declarations: [SearchServicesPage],
  exports: [SearchServicesPage]
})
export class SearchServicesPageModule {}
