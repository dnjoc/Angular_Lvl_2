import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { RouterLink } from '@angular/router';
import { ReactiveFormsModule, FormBuilder, FormArray, Validators } from "@angular/forms";
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-preferencias',
  standalone: true,
  imports: [HeaderComponent, RouterLink, ReactiveFormsModule, NgFor, NgIf],
  templateUrl: './preferencias.component.html',
  styleUrl: './preferencias.component.scss'
})
export class PreferenciasComponent {
  fb = new FormBuilder();
  preferencesForm: any;
  constructor() {

    this.preferencesForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3), Validators.pattern('[a-zA-Z ]*') ]],
      preferences: this.fb.array([
        this.fb.control('')
      ])
  });
  }

get username(){
  return this.preferencesForm.get("username");
}

get preferences() {
  return this.preferencesForm.get("preferences") as FormArray;
}
addPreference() {
  this.preferences.push(this.fb.control(''));
}
removePreference(i: any) {
  (<FormArray>this.preferences).removeAt(i);
}
onSubmit() {
  console.log(this.preferencesForm.value)
}
}
