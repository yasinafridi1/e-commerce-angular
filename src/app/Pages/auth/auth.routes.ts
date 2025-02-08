import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'signin',
        loadComponent: () => import('./signin/signin.component').then(c => c.SigninComponent)
    },
    {
        path: 'signup',
        loadComponent: () => import('./signup/signup.component').then(c => c.SignupComponent)
    }
];