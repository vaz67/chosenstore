import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InfantilPage } from './infantil.page';

describe('InfantilPage', () => {
  let component: InfantilPage;
  let fixture: ComponentFixture<InfantilPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(InfantilPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
