import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LocationPageRoutingModule } from './location-routing.module';

import { LocationPage } from './location.page';
import { Loader } from '@googlemaps/js-api-loader';
import { NgxGpAutocompleteModule } from '@angular-magic/ngx-gp-autocomplete';
import { GoogleMapsModule } from '@angular/google-maps';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LocationPageRoutingModule,
    NgxGpAutocompleteModule,
    GoogleMapsModule, 
  ],
  providers : [
    {
      provide: Loader,
      useValue: new Loader({
        apiKey: 'AIzaSyAFaylOBsuhYPYw9YqWmhN370xTvc6DXYU',
        libraries: ['places']
      })
    },
  ],
  declarations: [LocationPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LocationPageModule {}
