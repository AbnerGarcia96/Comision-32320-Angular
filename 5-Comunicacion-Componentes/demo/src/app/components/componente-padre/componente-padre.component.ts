import { AfterContentInit, AfterViewChecked, AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Estudiante } from 'src/app/models/estudiante';
import { ComponenteHijoComponent } from '../componente-hijo/componente-hijo.component';

@Component({
  selector: 'app-componente-padre',
  templateUrl: './componente-padre.component.html',
  styleUrls: ['./componente-padre.component.css']
})
export class ComponentePadreComponent implements OnInit, AfterViewInit {
  @Input() estudiantesPadre!: Estudiante[];
  @ViewChild(ComponenteHijoComponent) componenteHijo!: ComponenteHijoComponent;
  @ViewChild('mensaje') mensajePruebaRef!: ElementRef;
  mensajeSalida: string = '';
  
  constructor() {
    console.log("Llamando desde el constructor: ", this.componenteHijo);
  }

  ngOnInit(): void {
    console.log("Llamando desde el ngOnInit: ", this.componenteHijo);
    this.componenteHijo.usuarioActivo = { nombre: 'Pablo' }
  }

  ngAfterViewInit(): void {
    console.log("Llamando desde el ngAfterViewInit: ", this.componenteHijo);
    
    console.log(this.mensajePruebaRef);
  }

  funcionPrueba(){
    alert('Hola mundo!');
  }

  manejarEventoSalida(mensaje: string){
    this.mensajeSalida = mensaje;
  }

  agregarEstudiante(estudiante: Estudiante){
    estudiante.nombre = this.componenteHijo.nombreEstudiante;
    this.estudiantesPadre.push(estudiante);
  }
}
