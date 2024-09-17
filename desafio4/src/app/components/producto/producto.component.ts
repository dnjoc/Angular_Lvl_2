import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';
import { NgFor } from '@angular/common';
import { Movie } from "../../interfaces/pelicula";
import { RouterLink, Router } from '@angular/router';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-producto',
  standalone: true,
  imports: [NgFor, RouterLink, HeaderComponent],
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.scss'
})
export class ProductoComponent implements OnInit {
  urlImg = 'https://image.tmdb.org/t/p/original';
  //hacer el llamado a la funcion getPopulares de peliculas.service y la interface Pelicula
  populares: Movie[] = [];
  constructor(private peliculasService: PeliculasService, private router: Router) { }
  ngOnInit(): void {
    this.peliculasService.getPopulares().subscribe(peliculas => {
      console.log(peliculas);
      this.populares = peliculas;
      });
      }

      cerrarSesion() {
      //limpiar localstorage
      localStorage.clear();
      this.router.navigate(['/login']);
      }
}
