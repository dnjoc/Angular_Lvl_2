import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PreferenciasComponent } from './components/preferencias/preferencias.component';
import { CatalogoComponent } from './components/catalogo/catalogo.component';
import { CarritoComponent } from './components/carrito/carrito.component';
import { Desafio3a2Component } from './components/desafio3a2/desafio3a2.component';

export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    pathMatch: 'full',
  },
  {
    path: 'preferencias',
    component: PreferenciasComponent,
    pathMatch: 'full',
  },
  {
    path: 'catalogo',
    component: CatalogoComponent,
    pathMatch: 'full',
  },
  {
    path: 'carrito',
    component: CarritoComponent,
    pathMatch: 'full',
  },
  {
    path: 'desafio3',
    component: Desafio3a2Component,
    pathMatch: 'full',
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];
