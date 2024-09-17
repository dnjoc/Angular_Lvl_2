import { NgFor, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-carrito',
  standalone: true,
  imports: [RouterLink, NgIf, NgFor],
  templateUrl: './carrito.component.html',
  styleUrl: './carrito.component.scss'
})
export class CarritoComponent {
  @Input() carItems: any;
  @Input() toggleCar: any;

  removeItem(i: any) {
    this.carItems.splice(i, 1);
  }
}
