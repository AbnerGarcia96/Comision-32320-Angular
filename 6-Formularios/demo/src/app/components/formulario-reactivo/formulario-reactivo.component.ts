import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario-reactivo',
  templateUrl: './formulario-reactivo.component.html',
  styleUrls: ['./formulario-reactivo.component.css']
})
export class FormularioReactivoComponent implements OnInit {
  formularioUsuario: FormGroup;
  contrasenasIguales!: boolean;

  constructor(
    private fb: FormBuilder
  ) {
    this.formularioUsuario = fb.group({
      nombre: new FormControl('', [Validators.required]),
      correo: new FormControl('', [Validators.pattern('^[a-z]+@[a-z]+\\.[a-z]{2,3}$'), Validators.required]),
    contrasena: new FormControl('', [Validators.required, Validators.minLength(5), Validators.pattern('^.*[A-Z]+.*$')]),
      contrasena2: new FormControl('', [Validators.required, Validators.minLength(5)]),
      admin: new FormControl(false, []),
    });
  }

  ngOnInit(): void {
  }

  agregarUsuario(){
    const contrasena1 = this.formularioUsuario.value.contrasena;
    const contrasena2 = this.formularioUsuario.value.contrasena2;

    this.contrasenasIguales = contrasena1 === contrasena2;

    this.formularioUsuario.addControl('control1', new FormControl('', []));

    console.log(this.formularioUsuario);
  }

}
