import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CheckoutPromoPage } from './checkout-promo.page';

describe('CheckoutPromoPage', () => {
  let component: CheckoutPromoPage;
  let fixture: ComponentFixture<CheckoutPromoPage>;

  beforeEach((() => {
    fixture = TestBed.createComponent(CheckoutPromoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
