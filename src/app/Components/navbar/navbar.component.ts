import { Component } from '@angular/core';
import { NavItemsComponent } from '../nav-items/nav-items.component';
import { navItems } from '@assets/data';
import { NgForOf, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CartService } from 'app/services/cart.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NavItemsComponent, NgForOf, NgIf, RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  navItems = navItems;
  cartItems = 0;

  constructor(private _cartService: CartService) {}
  ngOnInit(): void {
    this._cartService.cartItemsCount$.subscribe((count) => {
      this.cartItems = count;
    });
  }
}
