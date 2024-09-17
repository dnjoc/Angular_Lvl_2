import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { LoginUser } from '../../interfaces/login-user';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ FormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  loginUser: LoginUser = {
    usuario: '',
    clave: ''
  }

  constructor(private router: Router) { }

  iniciarSesion() {
    localStorage.setItem('usuario', this.loginUser.usuario);
      localStorage.setItem('clave', this.loginUser.clave);
    console.log(this.loginUser.usuario, this.loginUser.clave);
       if (this.loginUser.usuario != localStorage.getItem('usuario') && this.loginUser.clave != localStorage.getItem('clave')) {
      localStorage.setItem('usuario', this.loginUser.usuario);
      localStorage.setItem('clave', this.loginUser.clave);
      this.router.navigate(['/producto']);
    } else {
      this.router.navigate(['/producto']);
    }
  }
}
