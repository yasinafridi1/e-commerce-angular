import { Injectable } from '@angular/core';
import { products } from '@assets/data';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  allProducts = products;

  getById(id: string | number | null) {
    if (!id) {
      return {};
    }
    return this.allProducts.find((p) => p.id === id) || {};
  }
}
