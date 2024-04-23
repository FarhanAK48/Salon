import { NgxGpAutocompleteDirective } from '@angular-magic/ngx-gp-autocomplete';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-location',
  templateUrl: './location.page.html',
  styleUrls: ['./location.page.scss'],
})
export class LocationPage implements OnInit {
  @ViewChild('ngxPlaces') placesRef!: NgxGpAutocompleteDirective;
  destination: any;
  options: any;

  center: any = {lat: 31.5203696, lng: 74.35874729999999};
  zoom = 16;
  radius: any = 20;
  map!: google.maps.Map;
  // display: google.maps.LatLngLiteral;
  constructor() { }

  ngOnInit() {
    console.log('location')
  }

  handleAddressChange(place: google.maps.places.PlaceResult) {
    console.log('Place**', place)
    this.destination = place.formatted_address;
    console.log('address**', place.formatted_address)
    console.log('Name**', place.name)

    console.log('LAT**', place.geometry?.location?.lat())
    console.log('LNG**', place.geometry?.location?.lng())

    this.center = {lat: place.geometry?.location?.lat(), lng: place.geometry?.location?.lng()}
    // this.center = { lat: place?.geometry?.location?.lat(), lng: place?.geometry?.location?.lng() };
    // this.initMap();
    console.log('Center', this.center)
  }

}
