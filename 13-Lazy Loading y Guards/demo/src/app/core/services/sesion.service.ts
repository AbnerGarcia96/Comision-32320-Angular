import { Injectable } from '@angular/core';
import { Sesion } from 'src/app/models/sesion';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SesionService {
  sesionSubject!: BehaviorSubject<Sesion>;

  constructor() {
    const sesion: Sesion = {
      sesionActiva: false
    };
    this.sesionSubject = new BehaviorSubject(sesion);
  }

  login(usuario: string, contrasena: string, admin: boolean){
    const sesion: Sesion = {
      sesionActiva: true,
      usuarioActivo: {
        usuario: usuario,
        contrasena: contrasena,
        admin: admin
      }
    }

    this.sesionSubject.next(sesion);
  }

  obtenerSesion(): Observable<Sesion>{
    return this.sesionSubject.asObservable();
  }
}
