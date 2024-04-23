import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CheckoutAppointmentPage } from './checkout-appointment.page';

describe('CheckoutAppointmentPage', () => {
  let component: CheckoutAppointmentPage;
  let fixture: ComponentFixture<CheckoutAppointmentPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CheckoutAppointmentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
