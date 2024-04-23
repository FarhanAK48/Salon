import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DeleteAddressConfirmationPage } from './delete-address-confirmation.page';

describe('DeleteAddressConfirmationPage', () => {
  let component: DeleteAddressConfirmationPage;
  let fixture: ComponentFixture<DeleteAddressConfirmationPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DeleteAddressConfirmationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
