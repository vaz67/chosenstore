import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AoPedidoDoClientePage } from './ao-pedido-do-cliente.page';

describe('AoPedidoDoClientePage', () => {
  let component: AoPedidoDoClientePage;
  let fixture: ComponentFixture<AoPedidoDoClientePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AoPedidoDoClientePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
