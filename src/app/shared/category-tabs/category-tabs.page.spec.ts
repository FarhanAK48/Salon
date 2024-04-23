import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CategoryTabsPage } from './category-tabs.page';

describe('CategoryTabsPage', () => {
  let component: CategoryTabsPage;
  let fixture: ComponentFixture<CategoryTabsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CategoryTabsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
