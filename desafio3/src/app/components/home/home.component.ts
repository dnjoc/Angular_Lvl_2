import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { RouterLink } from '@angular/router';
import { Desafio3a2Component } from '../desafio3a2/desafio3a2.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, RouterLink, Desafio3a2Component],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
