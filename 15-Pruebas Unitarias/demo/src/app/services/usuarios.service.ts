import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(
    private http: HttpClient
  ) { }

  obtenerUsuarios(){
    return this.http.get('https://635b1749aa7c3f113db5b06a.mockapi.io/usuarios');
  }
}
