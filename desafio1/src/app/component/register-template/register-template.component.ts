import { NgClass, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-register-template',
  standalone: true,
  imports: [ FormsModule, NgIf, NgClass ],
  templateUrl: './register-template.component.html',
  styleUrl: './register-template.component.scss'
})
export class RegisterTemplateComponent {
  name: string = '';
  lastname: string = '';
  email: string = '';
  username: string = '';
  password: string = '';
  phone: string = '';
  checkb: boolean = false;


  tieneLetraMayuscula(input: string): boolean {
    return /[A-Z]/.test(input);
  };
  tieneLetraMinuscula(input2: string): boolean {
    return /[a-z]/.test(input2);
  };
  tieneNumero(num: string): boolean {
    return /\d/.test(num);
  };
  longitudMinimaPassword(length: string): boolean {
    return length.length >= 8;
  };
  tieneCaracterEspecial(caracter: string): boolean {
    return /[!@#$%;^&*(),.?"{}|<>]/.test(caracter);
  };
  tieneCaracteresEspeciales(especial: string): boolean {
    return !/^[a-zA-Z0-9\s]+$/.test(especial);
  };
  longitudMinimaPassword3(length: string): boolean {
    return length.length < 3;
  };
  longitudMinimaPassword5(length: string): boolean {
    return length.length < 5;
  };

  submitForm(form: any) {
    console.log("Formulario enviado");
    console.log(form);
  }
}
