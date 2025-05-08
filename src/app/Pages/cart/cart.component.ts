import { Component } from '@angular/core';
import { NavbarComponent } from '../../Components/navbar/navbar.component';
import { FooterComponent } from '../../Components/footer/footer.component';
import { AlphaSlabComponent } from '../../Components/typograpghy/alpha-slab/alpha-slab.component';
import { ButtonPrimaryComponent } from '../../Components/button-primary/button-primary.component';
import { NgFor, NgIf } from '@angular/common';
import { CartService } from 'app/services/cart.service';
import { CartItem } from '@models/index';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [
    NavbarComponent,
    FooterComponent,
    ButtonPrimaryComponent,
    AlphaSlabComponent,
    NgIf,
    NgFor,
  ],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
})
export class CartComponent {
  items: CartItem[] = [];

  constructor(private _cartService: CartService) {}

  ngOnInit() {
    this.items = this._cartService.getCartItems();
  }

  increament(productId: string) {
    this._cartService.increamentQuantity(productId);
  }

  decreament(productId: string) {
    this._cartService.decreamentQuantity(productId);
  }

  getTotalAmount() {
    return this._cartService.getTotalAmount();
  }

  deleteItem(productId: string) {
    this._cartService.removeItem(productId);
    this.items = this._cartService.getCartItems();
  }
}
