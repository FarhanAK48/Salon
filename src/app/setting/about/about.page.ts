import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {

  constructor(private router: Router) { }

  list = [
    {
      id: 1,
      title: 'Terms of Service'
    },
    {
      id: 2,
      title: 'Privacy Policy'
    },
    {
      id: 3,
      title: 'Licenses'
    },

  ]
  ngOnInit() {
  }

  onNavigate(item:any){
    if(item.id === 1){
      this.router.navigate(['/terms-service']);
    } else  if(item.id === 2){
          this.router.navigate(['/privacy-policy']);
        } else{
          this.router.navigate(['/licenseses']);

        }

  }

}
