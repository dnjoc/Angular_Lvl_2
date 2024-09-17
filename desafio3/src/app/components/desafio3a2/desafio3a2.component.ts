import { Component } from '@angular/core';
import { PersonaService } from '../../services/persona.service';
import { HeaderComponent } from '../header/header.component';
import { RouterLink } from '@angular/router';
import { DiaSemanaPipe } from '../../pipes/dia-semana.pipe';
import { CurrencyPipe, DatePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';


@Component({
  selector: 'app-desafio3a2',
  standalone: true,
  imports: [HeaderComponent, RouterLink, DiaSemanaPipe, CurrencyPipe, UpperCasePipe, DatePipe, TitleCasePipe],
  templateUrl: './desafio3a2.component.html',
  styleUrl: './desafio3a2.component.scss',
  providers: [PersonaService]
})
export class Desafio3a2Component {
  personas: any;

  constructor(private personaService: PersonaService) {
    this.personas = this.personaService.persona;
  }
}
