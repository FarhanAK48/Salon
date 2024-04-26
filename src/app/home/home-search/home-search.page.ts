import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SearchServicesPage } from '../../shared/search-services/search-services.page';


@Component({
  selector: 'app-home-search',
  templateUrl: './home-search.page.html',
  styleUrls: ['./home-search.page.scss'],
})
export class HomeSearchPage  {
  // myForm!:FormGroup;
  inputValue:any;
 
  constructor(private modalController: ModalController) {  }



  searches = [
    {
      id:1,
      title: 'Haircut',
    },
    {
      id:2,
      title: 'Shave',
    },
  ]
 trendingCards = [
  {
    id:1,
  },
  {
    id:2,
  }
 ]

 services = [
  {
    id:1,
    img:'/assets/images/haircut-men.png',
    title: 'Haircut for men'
  },
  {
    id:2,
    img:'/assets/images/shave.png',
    title: 'Shave for men'
  },
  {
    id:3,
    img:'/assets/images/haircut-men.png',
    title: 'Massage for Men'
  },

 ]



  onInputValueChange(newValue: string) {
    console.log('Input value changed:', newValue);
    console.log('input val', this.inputValue)  
      if (this.inputValue.trim() !== '') {
        this.openModal(); 
      }  
  }


  async openModal() {
    const modal = await this.modalController.create({
      component: SearchServicesPage,
      backdropDismiss: false,      
    });
    await modal.present();
  }

}


