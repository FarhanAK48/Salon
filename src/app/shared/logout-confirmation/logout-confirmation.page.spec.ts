import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LogoutConfirmationPage } from './logout-confirmation.page';

describe('LogoutConfirmationPage', () => {
  let component: LogoutConfirmationPage;
  let fixture: ComponentFixture<LogoutConfirmationPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LogoutConfirmationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
