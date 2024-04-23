import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MenShopPage } from './men-shop.page';

describe('MenShopPage', () => {
  let component: MenShopPage;
  let fixture: ComponentFixture<MenShopPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MenShopPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
