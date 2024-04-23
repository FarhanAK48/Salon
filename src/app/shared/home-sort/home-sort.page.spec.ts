import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeSortPage } from './home-sort.page';

describe('HomeSortPage', () => {
  let component: HomeSortPage;
  let fixture: ComponentFixture<HomeSortPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(HomeSortPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
