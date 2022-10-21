import { Component, OnInit } from '@angular/core';
import { CursoService } from 'src/app/cursos/services/curso.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private cursos: CursoService
  ) {
    cursos.obtenerCursos().subscribe(console.log)
  }

  ngOnInit(): void {
  }

}
