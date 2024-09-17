import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Desafio3a2Component } from './desafio3a2.component';

describe('Desafio3a2Component', () => {
  let component: Desafio3a2Component;
  let fixture: ComponentFixture<Desafio3a2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Desafio3a2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Desafio3a2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
