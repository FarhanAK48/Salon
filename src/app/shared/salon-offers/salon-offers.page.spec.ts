import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SalonOffersPage } from './salon-offers.page';

describe('SalonOffersPage', () => {
  let component: SalonOffersPage;
  let fixture: ComponentFixture<SalonOffersPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SalonOffersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
