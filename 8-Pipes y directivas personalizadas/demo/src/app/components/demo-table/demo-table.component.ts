import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Curso } from 'src/app/models/curso';
import { Datos } from '../../data/cursos';

@Component({
  selector: 'app-demo-table',
  templateUrl: './demo-table.component.html',
  styleUrls: ['./demo-table.component.css']
})
export class DemoTableComponent implements OnInit {
  cursos: Curso[] = Datos.cursos;
  columnas: string[] = ['nombre', 'comision', 'profesor', 'fechaInicio', 'fechaFin', 'inscripcionAbierta', 'acciones']
  dataSource: MatTableDataSource<Curso> = new MatTableDataSource<Curso>(this.cursos);
  constructor() { }

  ngOnInit(): void {
  }

  filtrarCurso(event: Event){
    const valorObtenido = (event.target as HTMLInputElement).value;
    this.dataSource.filterPredicate = function(curso: Curso, filtro: string){
      return curso.nombre.toLocaleLowerCase().includes(filtro.toLocaleLowerCase());
    };
    this.dataSource.filter = valorObtenido.trim().toLowerCase();
  }

  filtrarComision(event: Event){
    const valorObtenido = (event.target as HTMLInputElement).value;
    this.dataSource.filterPredicate = function(curso: Curso, filtro: string){
      return curso.comision.toLocaleLowerCase().includes(filtro.toLocaleLowerCase());
    };
    this.dataSource.filter = valorObtenido.trim().toLowerCase();
  }

  editar(){
    console.log(this.cursos);
  }

}
