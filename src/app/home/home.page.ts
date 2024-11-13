import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}
  products = [
    { name: 'Produto 1', price: 30 },
    { name: 'Produto 2', price: 70 },
    { name: 'Produto 3', price: 150 },
    // Adicione mais produtos conforme necessário
  ];
  filteredProducts = [...this.products]; // Inicialize com todos os produtos
  selectedPrice!: string;

filterProducts() {
  if (!this.selectedPrice) {
    this.filteredProducts = [...this.products]; // Se nenhum filtro, mostrar todos
    return;
  }
  
  const [minPrice, maxPrice] = this.selectedPrice.split('-').map(Number);
  this.filteredProducts = this.products.filter(product => 
    product.price >= minPrice && product.price <= maxPrice
  );
}

}
