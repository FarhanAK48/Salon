import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.page.html',
  styleUrls: ['./logout.page.scss'],
})
export class LogoutPage implements OnInit {


  constructor(private router: Router) { }

  list = [
    {
      id: 1,
      title: 'Your Favorite',
      subTitle: 'Reorder your favorite service in a click',
      icon: '/assets/icon/favourite.svg'
      
    },
    {
      id: 2,
      title: 'Payments',
      subTitle: 'Payment methods, Transaction History ',
      icon: '/assets/icon/credit-card.svg'

    },
    {
      id: 3,
      title: 'Manage Address',
      icon: '/assets/icon/address.svg'

    },
    {
      id: 4,
      title: 'Notifications',
      subTitle: 'View your past notifications',
      icon: '/assets/icon/bell.svg'

    },
    {
      id: 5,
      title: 'Register as partner',
      subTitle: 'Want to list your service? Register with us',
      icon: '/assets/icon/briefcase.svg'

    },
    {
      id: 6,
      title: 'About',
      subTitle: 'Privacy Policy, Terms of Services, Licenses',
      icon: '/assets/icon/info.svg'

    },
    {
      id: 7,
      title: 'Logout',
      icon: '/assets/icon/logout-red.svg'

    },
  ]
  ngOnInit() {
    console.log('logout')
  }

  onNavigate(item: any) {
    if (item.id === 1) {
      this.router.navigate(['/your-favorites']);
    } else if (item.id === 2) {
      this.router.navigate(['/payment-method']);
    }
    else if (item.id === 3) {
      this.router.navigate(['/manage-address']);
    }
    else if (item.id === 4) {
      this.router.navigate(['/payment-method']);
    }
    else if (item.id === 5) {
      this.router.navigate(['/payment-method']);
    }
    else if (item.id === 6) {
      this.router.navigate(['/about']);
    }
    else {
      // this.router.navigate(['']);
    }



  }



}
