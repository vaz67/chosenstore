import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChristianPage } from './christian.page';

describe('ChristianPage', () => {
  let component: ChristianPage;
  let fixture: ComponentFixture<ChristianPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ChristianPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
