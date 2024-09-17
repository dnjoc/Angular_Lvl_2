import { RegisterTemplateComponent } from './component/register-template/register-template.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'register',
    component: RegisterTemplateComponent
  },
  {
    path: '',
    redirectTo: '/register',
    pathMatch: 'full'
  }
];
