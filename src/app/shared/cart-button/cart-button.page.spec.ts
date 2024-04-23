import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CartButtonPage } from './cart-button.page';

describe('CartButtonPage', () => {
  let component: CartButtonPage;
  let fixture: ComponentFixture<CartButtonPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CartButtonPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
