
import { CanActivateFn, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

export const loginGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  let usuario = 'estudiante';
  let clave = 'cadif1';
 let router= new Router
  if (localStorage.getItem('usuario') === usuario && localStorage.getItem('clave') === clave) {
    return true;
  } else {
    alert('Debes tener el usuario correcto para acceder a este contenido.');
    router.navigate(['/login'])
    return false;
  }
};
