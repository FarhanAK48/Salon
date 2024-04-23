import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BookingPage } from './booking.page';
import { OrderDetailPage } from '../order-detail/order-detail.page';

const routes: Routes = [
  {
    path: '',
    component: BookingPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../logout/logout.module').then(m => m.LogoutPageModule),
       
      },
      {
        path: 'booking-tab',
        loadChildren: () => import('../booking-tab/booking-tab.module').then(m => m.BookingTabPageModule),       
      },
      {
        path: 'logout',
        loadChildren: () => import('../logout/logout.module').then(m => m.LogoutPageModule),
       
      },
   
      {
        path: '',
        redirectTo: 'home',
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
