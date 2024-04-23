import { ComponentFixture, TestBed } from '@angular/core/testing';
import { YourFavoritesPage } from './your-favorites.page';

describe('YourFavoritesPage', () => {
  let component: YourFavoritesPage;
  let fixture: ComponentFixture<YourFavoritesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(YourFavoritesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
