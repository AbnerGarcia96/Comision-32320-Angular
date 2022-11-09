import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Curso } from '../models/cursos';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  constructor(
    private http: HttpClient
  ) { }

  obtenerCursos(): Observable<Curso[]>{
    return this.http.get<Curso[]>(`${environment.api}/cursos`).pipe(
      delay(2000)
    );
  }
}
