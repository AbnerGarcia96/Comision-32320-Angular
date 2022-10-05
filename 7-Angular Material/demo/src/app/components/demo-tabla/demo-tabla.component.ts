import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Curso } from 'src/app/models/curso';
import { DialogComponent } from '../dialog/dialog.component';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-demo-tabla',
  templateUrl: './demo-tabla.component.html',
  styleUrls: ['./demo-tabla.component.css']
})
export class DemoTablaComponent implements OnInit {
  cursos: Curso[] = [
    {nombre: 'Angular', comision:'32320', profesor:'Abner'},
    {nombre: 'Python', comision:'32320', profesor:'Gustavo'},
    {nombre: 'ReactJS', comision:'32320', profesor:'Lucas'},
    {nombre: 'Sass', comision:'32320', profesor:'Fernando'},
  ];
  columnas: string[] = ['nombre', 'comision', 'profesor', 'acciones'];
  dataSource: MatTableDataSource<Curso> = new MatTableDataSource<Curso>(this.cursos);
  
  constructor(
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  filtrar(event: Event){
    const valorObtenido = (event.target as HTMLInputElement).value;

    this.dataSource.filter = valorObtenido.trim().toLocaleLowerCase();
  }

  editar(){
    this.dialog.open(DialogComponent, {
      width: '350px'
    })
  }
}
