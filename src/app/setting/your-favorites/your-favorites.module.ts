import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { YourFavoritesPageRoutingModule } from './your-favorites-routing.module';

import { YourFavoritesPage } from './your-favorites.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    YourFavoritesPageRoutingModule
  ],
  declarations: [YourFavoritesPage]
})
export class YourFavoritesPageModule {}
