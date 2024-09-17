import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PreferenciasComponent } from './components/preferencias/preferencias.component';
import { CatalogoComponent } from './components/catalogo/catalogo.component';
import { CarritoComponent } from './components/carrito/carrito.component';

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
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];
