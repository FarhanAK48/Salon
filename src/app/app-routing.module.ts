import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {
  //   path: 'home',
  //   loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  // },
  {
    path: '',
    redirectTo: 'intro',
    pathMatch: 'full'
  },
  {
    path: 'intro',
    loadChildren: () => import('./pages/intro/intro.module').then( m => m.IntroPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./pages/signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'otp',
    loadChildren: () => import('./pages/otp/otp.module').then( m => m.OtpPageModule)
  },
  {
    path: 'otp-verify',
    loadChildren: () => import('./pages/otp-verify/otp-verify.module').then( m => m.OtpVerifyPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'men-shop',
    loadChildren: () => import('./shop/men-shop/men-shop.module').then( m => m.MenShopPageModule)
  },
  {
    path: 'salon-offers',
    loadChildren: () => import('./shared/salon-offers/salon-offers.module').then( m => m.SalonOffersPageModule)
  },
  {
    path: 'category-tabs',
    loadChildren: () => import('./shared/category-tabs/category-tabs.module').then( m => m.CategoryTabsPageModule)
  },
  {
    path: 'custom-popover',
    loadChildren: () => import('./shared/custom-popover/custom-popover.module').then( m => m.CustomPopoverPageModule)
  },
  {
    path: 'checkout',
    loadChildren: () => import('./checkout/checkout/checkout.module').then( m => m.CheckoutPageModule)
  },

  {
    path: 'checkout-appointment',
    loadChildren: () => import('./checkout/checkout-appointment/checkout-appointment.module').then( m => m.CheckoutAppointmentPageModule)
  },
  {
    path: 'checkout-promo',
    loadChildren: () => import('./checkout/checkout-promo/checkout-promo.module').then( m => m.CheckoutPromoPageModule)
  },
  {
    path: 'payment-methods',
    loadChildren: () => import('./shared/payment-methods/payment-methods.module').then( m => m.PaymentMethodsPageModule)
  },
  {
    path: 'cart-button',
    loadChildren: () => import('./shared/cart-button/cart-button.module').then( m => m.CartButtonPageModule)
  },
  {
    path: 'booking',
    loadChildren: () => import('./bookings/booking/booking.module').then( m => m.BookingPageModule)
  },
  {
    path: 'past',
    loadChildren: () => import('./shared/past/past.module').then( m => m.PastPageModule)
  },
  {
    path: 'order-detail',
    loadChildren: () => import('./bookings/order-detail/order-detail.module').then( m => m.OrderDetailPageModule)
  },
  {
    path: 'booking-tab',
    loadChildren: () => import('./bookings/booking-tab/booking-tab.module').then( m => m.BookingTabPageModule)
  },
  {
    path: 'home-screen',
    loadChildren: () => import('./home/home-screen/home-screen.module').then( m => m.HomeScreenPageModule)
  },
  {
    path: 'home-tabs',
    loadChildren: () => import('./shared/home-tabs/home-tabs.module').then( m => m.HomeTabsPageModule)
  },

  {
    path: 'home-search',
    loadChildren: () => import('./home/home-search/home-search.module').then( m => m.HomeSearchPageModule)
  },
  {
    path: 'haircut',
    loadChildren: () => import('./home/haircut/haircut.module').then( m => m.HaircutPageModule)
  },
  {
    path: 'search-services',
    loadChildren: () => import('./home/search-services/search-services.module').then( m => m.SearchServicesPageModule)
  },
  {
    path: 'home-sort',
    loadChildren: () => import('./shared/home-sort/home-sort.module').then( m => m.HomeSortPageModule)
  },
  {
    path: 'logout-confirmation',
    loadChildren: () => import('./shared/logout-confirmation/logout-confirmation.module').then( m => m.LogoutConfirmationPageModule)
  },
  {
    path: 'payment-card',
    loadChildren: () => import('./setting/payment-card/payment-card.module').then( m => m.PaymentCardPageModule)
  },
  {
    path: 'payment-method',
    loadChildren: () => import('./setting/payment-method/payment-method.module').then( m => m.PaymentMethodPageModule)
  },
  {
    path: 'add-payment-method',
    loadChildren: () => import('./shared/add-payment-method/add-payment-method.module').then( m => m.AddPaymentMethodPageModule)
  },
  {
    path: 'manage-address',
    loadChildren: () => import('./setting/manage-address/manage-address.module').then( m => m.ManageAddressPageModule)
  },
  {
    path: 'delete-address-confirmation',
    loadChildren: () => import('./shared/delete-address-confirmation/delete-address-confirmation.module').then( m => m.DeleteAddressConfirmationPageModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./setting/about/about.module').then( m => m.AboutPageModule)
  },
  {
    path: 'terms-service',
    loadChildren: () => import('./setting/terms-service/terms-service.module').then( m => m.TermsServicePageModule)
  },
  {
    path: 'privacy-policy',
    loadChildren: () => import('./setting/privacy-policy/privacy-policy.module').then( m => m.PrivacyPolicyPageModule)
  },
  {
    path: 'your-favorites',
    loadChildren: () => import('./setting/your-favorites/your-favorites.module').then( m => m.YourFavoritesPageModule)
  },
  {
    path: 'location',
    loadChildren: () => import('./home/location/location.module').then( m => m.LocationPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
