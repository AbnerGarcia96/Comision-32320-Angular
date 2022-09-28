import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { Estudiante } from 'src/app/models/estudiante';

@Component({
  selector: 'app-componente-hijo',
  templateUrl: './componente-hijo.component.html',
  styleUrls: ['./componente-hijo.component.css']
})
export class ComponenteHijoComponent implements OnInit {
  @Input() estudiantes!: any[];
  @Input() usuarioActivo: any;
  @Input() funcionPrueba!: () => void;
  @Output() eventoSalida: EventEmitter<string> = new EventEmitter<string>();
  @Output() eventoSalidaEstudiante: EventEmitter<Estudiante> = new EventEmitter<Estudiante>();
  nombreEstudiante!: string;

  constructor() {
    
  }

  ngOnInit(): void {
    this.funcionPrueba();
    this.eventoSalida.emit('Este mensaje lo estoy enviando desde el componente hijo');
  }

  agregarEstudiante(){
    let estudiante: Estudiante = {
      nombre: 'Giancarlo',
      curso: 'ReactJS'
    }
    this.eventoSalidaEstudiante.emit(estudiante);
  }

}
