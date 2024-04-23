import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BookingTabPage } from './booking-tab.page';

describe('BookingTabPage', () => {
  let component: BookingTabPage;
  let fixture: ComponentFixture<BookingTabPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BookingTabPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
