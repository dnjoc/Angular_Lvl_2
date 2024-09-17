import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { RouterLink } from '@angular/router';
import { CarritoComponent } from '../carrito/carrito.component';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-catalogo',
  standalone: true,
  imports: [HeaderComponent, RouterLink, CarritoComponent, NgFor, NgIf],
  templateUrl: './catalogo.component.html',
  styleUrl: './catalogo.component.scss'
})
export class CatalogoComponent {
  products = [
    {
    id: 1,
    name: 'Botines blanco y negro',
    description: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.',
    imgUrl: 'https://media.istockphoto.com/id/1663937651/es/foto/concepto-de-tienda-de-moda-o-revista-zapatos-casuales-cl%C3%A1sicos-en-dise%C3%B1o-minimalista-creativo.webp?b=1&s=170667a&w=0&k=20&c=45lcuHc1lAJSgsqCUPfpyIIciVzWfdvkgIMfVB28CQU='
    },
    {
      id: 2,
      name: 'Zapatilla vinotinto',
      description: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.',
      imgUrl: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8emFwYXRvc3xlbnwwfHwwfHx8MA%3D%3D'
    },
    {
      id: 3,
      name: 'Zapato rojo',
      description: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.',
      imgUrl: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8emFwYXRvc3xlbnwwfHwwfHx8MA%3D%3D'
    },
    {
      id: 4,
      name: 'Nike negro',
      description: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.',
      imgUrl: 'https://images.unsplash.com/photo-1543508282-6319a3e2621f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHphcGF0b3N8ZW58MHx8MHx8fDA%3D'
    },
    { id: 5,
      name: 'Zapato marron',
      description: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.',
      imgUrl: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8emFwYXRvc3xlbnwwfHwwfHx8MA%3D%3D'
    },
    {
      id: 6,
      name: 'Zapato deportivo',
      description: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.',
      imgUrl: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8emFwYXRvc3xlbnwwfHwwfHx8MA%3D%3D'
    },
    {
      id: 7,
      name: 'Zapato para dama',
      description: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.',
      imgUrl: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8emFwYXRvc3xlbnwwfHwwfHx8MA%3D%3D'
    },
    {
      id: 8,
      name: 'Deportivo verde',
      description: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.',
      imgUrl: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8emFwYXRvc3xlbnwwfHwwfHx8MA%3D%3D'
    },
    {
      id: 9,
      name: 'Zapato blanco para dama',
      description: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.',
      imgUrl: 'https://media.istockphoto.com/id/1629114862/es/foto/primer-plano-de-zapatillas-deportivas-blancas-sobre-fondo-blanco.webp?b=1&s=170667a&w=0&k=20&c=AD3VogXQXFa8mmaddp2jQBgzFkblfonulURIvW3ct4o='
    },
    {
      id: 10,
      name: 'Zapato deportivo',
      description: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.',
      imgUrl: 'https://media.istockphoto.com/id/1407127841/es/foto/zapatilla-blanca-con-acentos-de-color-sobre-un-fondo-degradado-verde-moda-masculina-zapato.webp?b=1&s=170667a&w=0&k=20&c=izQvP8MSr9jdBsrO931DlQnrcgYKQQli70XAWAXPrY4='
    }
  ];

  carItems: any[] = [];
  showCar = false;

  addToCar(product: any) {
    this.carItems.push(product);
  }
  toggleCar() {
    this.showCar = !this.showCar;
  }


}
