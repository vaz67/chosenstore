import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StreetwearPage } from './streetwear.page';

describe('StreetwearPage', () => {
  let component: StreetwearPage;
  let fixture: ComponentFixture<StreetwearPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(StreetwearPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
