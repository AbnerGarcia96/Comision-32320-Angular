import { Component, OnInit } from '@angular/core';
import { Curso } from 'src/app/models/curso';

@Component({
  selector: 'app-ejemplos-angular-material',
  templateUrl: './ejemplos-angular-material.component.html',
  styleUrls: ['./ejemplos-angular-material.component.css']
})
export class EjemplosAngularMaterialComponent implements OnInit {
  cursos: Curso[] = [
    {nombre: 'Angular', comision:'32320', profesor:'Abner'},
    {nombre: 'Python', comision:'32320', profesor:'Gustavo'},
    {nombre: 'ReactJS', comision:'32320', profesor:'Lucas'},
    {nombre: 'Sass', comision:'32320', profesor:'Fernando'},
  ];
  constructor() { }

  ngOnInit(): void {
  }

  manejarEvento(){
    alert('Hice click');
  }

}
