import { Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./Pages/auth/auth.routes').then((c) => c.routes),
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./Pages/dashboard/dashboard.routes').then((c) => c.routes),
  },
  {
    path: 'cart',
    loadComponent: () =>
      import('./Pages/cart/cart.component').then((c) => c.CartComponent),
  },
  {
    path: 'product/:id',
    loadComponent: () =>
      import('./Pages/product-detail/product-detail.component').then(
        (c) => c.ProductDetailComponent
      ),
  },
];
