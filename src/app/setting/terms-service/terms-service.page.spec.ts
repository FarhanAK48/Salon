import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TermsServicePage } from './terms-service.page';

describe('TermsServicePage', () => {
  let component: TermsServicePage;
  let fixture: ComponentFixture<TermsServicePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TermsServicePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
