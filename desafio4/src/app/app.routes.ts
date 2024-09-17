import { LoginComponent } from './components/login/login.component';
import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PreferenciasComponent } from './components/preferencias/preferencias.component';
import { CatalogoComponent } from './components/catalogo/catalogo.component';
import { CarritoComponent } from './components/carrito/carrito.component';
import { Desafio3a2Component } from './components/desafio3a2/desafio3a2.component';
import { ProductoComponent } from './components/producto/producto.component';
import { loginGuard } from './guardians/login.guard';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
    pathMatch: 'full',
    canActivate: [loginGuard]
  },
  {
    path: 'preferencias',
    component: PreferenciasComponent,
    pathMatch: 'full',
    canActivate: [loginGuard]
  },
  {
    path: 'catalogo',
    component: CatalogoComponent,
    pathMatch: 'full',
    canActivate: [loginGuard]
  },
  {
    path: 'carrito',
    component: CarritoComponent,
    pathMatch: 'full',
    canActivate: [loginGuard]
  },
  {
    path: 'desafio3',
    component: Desafio3a2Component,
    pathMatch: 'full',
    canActivate: [loginGuard]
  },

  {
    path: 'producto',
    component: ProductoComponent,
    pathMatch: 'full',
    canActivate: [loginGuard]
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  }
];
