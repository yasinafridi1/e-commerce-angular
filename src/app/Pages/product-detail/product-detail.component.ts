import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'app/services/product.service';
import { NavbarComponent } from '../../Components/navbar/navbar.component';
import { FooterComponent } from '../../Components/footer/footer.component';
import { CartService } from 'app/services/cart.service';

@Component({
  selector: 'app-product-detail',
  imports: [NavbarComponent, FooterComponent],
  templateUrl: './product-detail.component.html',
  standalone: true,
  styleUrl: './product-detail.component.scss',
})
export class ProductDetailComponent {
  product: any = {};

  constructor(
    private _productService: ProductService,
    private route: ActivatedRoute,
    private _cartService: CartService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      if (id) {
        this.product = this._productService.getById(id);
      }
    });
  }

  addProduct(): void {
    this._cartService.addToCart(this.product);
  }
}
