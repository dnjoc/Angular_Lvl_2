import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  user: any = localStorage.getItem('usuario');

  constructor(private router: Router){}

  cerrarSesion() {
    //limpiar localstorage
    localStorage.clear();
    this.router.navigate(['/login']);
    }
}
