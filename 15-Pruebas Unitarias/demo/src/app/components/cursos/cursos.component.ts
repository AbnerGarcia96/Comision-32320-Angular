import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {
  formulario: FormGroup;
  cursos: any[] = [];

  constructor(
  ) {
    this.formulario = new FormGroup({
      nombre: new FormControl('', [Validators.required]),
      comision: new FormControl()
    });
  }

  agregarCurso(){
    console.log(this.formulario);
    this.cursos.push(this.formulario.value);
  }

  ngOnInit(): void {
  }

}
