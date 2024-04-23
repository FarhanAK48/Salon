import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CustomPopoverPage } from './custom-popover.page';

describe('CustomPopoverPage', () => {
  let component: CustomPopoverPage;
  let fixture: ComponentFixture<CustomPopoverPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CustomPopoverPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
