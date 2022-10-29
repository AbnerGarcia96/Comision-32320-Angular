import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { CharactersService } from 'src/app/services/characters.service';


@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit, OnDestroy {

  subscription!: Subscription;

  dataSource: MatTableDataSource<any> = new MatTableDataSource<any>();

  displayedColumns = ['nombre', 'estado', 'especie'];

  @ViewChild(MatPaginator) paginador!: MatPaginator
  @ViewChild(MatSort) sort!: MatSort;
  
  constructor(
    private charactersService: CharactersService,
  ) { }

  ngOnInit(): void {

    this.subscription = this.charactersService.getAllCharacters().subscribe(
      respuesta => {
        this.dataSource.data = respuesta.results;
        this.dataSource.paginator = this.paginador;
        this.dataSource.sort = this.sort;
      }
    )

  }

  ngOnDestroy(): void {
    if(this.subscription){
      this.subscription.unsubscribe();
    }
  }

  applyFilter($event: any): void {

  }

}
