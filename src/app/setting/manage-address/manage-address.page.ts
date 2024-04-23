import { Component, OnInit } from '@angular/core';
interface Addresses{
  id:number,
  title: string,
  subtitle:string,
}
@Component({
  selector: 'app-manage-address',
  templateUrl: './manage-address.page.html',
  styleUrls: ['./manage-address.page.scss'],
})
export class ManageAddressPage implements OnInit {

  constructor() { }
address:Addresses[] = [
  {
    id:1,
    title: 'Home',
    subtitle:'3944 Water Street, Walnut Creek, California',
  },
  {
    id:2,
    title: 'Home 750',
    subtitle:'3944 Water Street, Walnut Creek, California',
  },
]
  ngOnInit() {
    console.log('Manage address');
  }

}
