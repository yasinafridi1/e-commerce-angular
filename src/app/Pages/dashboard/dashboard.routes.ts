import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./home/home.component').then(c => c.HomeComponent)
    },
    {
        path: 'orders',
        loadComponent: () => import('./orders/orders.component').then(c => c.OrdersComponent)
    }
];