import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { SesionService } from 'src/app/core/services/sesion.service';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formulario: FormGroup

  constructor(
    private sesionService: SesionService,
    private router: Router
  ) {
    this.formulario = new FormGroup({
      usuario: new FormControl('Abner'),
      contrasena: new FormControl('asd.123'),
      admin: new FormControl(true),
      canActivateChild: new FormControl(true),
      canLoad: new FormControl(true)
    })
  }

  ngOnInit(): void {
  }

  login(){
    let usuario: Usuario = {
      id: 0,
      usuario: this.formulario.value.usuario,
      contrasena: this.formulario.value.contrasena,
      admin: this.formulario.value.admin,
      canActivateChild: this.formulario.value.canActivateChild,
      canLoad: this.formulario.value.canLoad
    }
    this.sesionService.login(usuario);
    this.router.navigate(['inicio']);
  }

}
