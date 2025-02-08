import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./Pages/home/home.component').then(c => c.HomeComponent)
    },
    {
        path: 'home',
        loadComponent: () => import('./Pages/home/home.component').then(c => c.HomeComponent)
    },
    {
        path: 'auth',
        loadChildren: () => import('./Pages/auth/auth.routes').then(c => c.routes)
    },
    {
        path: 'dashboard',
        loadChildren: () => import('./Pages/dashboard/dashboard.routes').then(c => c.routes)
    }
];
