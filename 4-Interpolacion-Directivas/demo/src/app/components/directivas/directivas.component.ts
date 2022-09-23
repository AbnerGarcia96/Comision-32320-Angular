import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/models/persona';

@Component({
  selector: 'app-directivas',
  templateUrl: './directivas.component.html',
  styleUrls: ['./directivas.component.css']
})
export class DirectivasComponent implements OnInit {
  variable1: number = 10;
  variable2: number = 5;
  usuarioActivo: Persona = {
    nombre: 'Celeste',
    edad: 26
  }
  listaNombres: Array<Persona> = [
    {nombre: 'Abner', edad: 26},
    {nombre: 'Celeste', edad: 8},
    {nombre: 'Pablo', edad: 30},
    {nombre: 'Ijak', edad: 10},
    {nombre: 'Carlos', edad: 15},
  ];
  fecha: Date = new Date();

  constructor(
  ) {
  }

  ngOnInit(): void {
  }

}
