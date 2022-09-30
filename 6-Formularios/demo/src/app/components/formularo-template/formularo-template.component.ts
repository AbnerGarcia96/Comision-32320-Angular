import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

export interface Clase {
  nombre: string;
  profesor: string;
}

@Component({
  selector: 'app-formularo-template',
  templateUrl: './formularo-template.component.html',
  styleUrls: ['./formularo-template.component.css']
})
export class FormularoTemplateComponent implements OnInit {
  clase: Clase = {
    nombre: '',
    profesor: ''
  }
  @ViewChild('formularioClase') formularioClaseRef!: ElementRef;
  
  constructor() { }

  ngOnInit(): void {
  }

  agregarClase(){
    console.log(this.formularioClaseRef.nativeElement);
  }

}
