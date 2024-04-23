import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BookingPage } from './booking.page';

const routes: Routes = [
  {
    path: '',
    component: BookingPage,
    children: [
      {
        path: 'search',
        loadChildren: () => import('./../../home/home-search/home-search.module').then(m => m.HomeSearchPageModule),
       
      },
      {
        path: 'booking-tab',
        loadChildren: () => import('../booking-tab/booking-tab.module').then(m => m.BookingTabPageModule),       
      },
      {
        path: 'account',
        loadChildren: () => import('../../setting/logout/logout.module').then(m => m.LogoutPageModule),       
      },   
      {
        path: '',
        redirectTo: 'account',
        pathMatch: 'full'
      }
    ]
  },
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookingPageRoutingModule {}
