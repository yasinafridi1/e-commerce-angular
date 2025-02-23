import { Component } from '@angular/core';
import { NavItemsComponent } from '../nav-items/nav-items.component';
import { navItems } from '@assets/data';
import { NgForOf, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NavItemsComponent, NgForOf, NgIf, RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  navItems = navItems;
  cartItems = [1, 2];
}
