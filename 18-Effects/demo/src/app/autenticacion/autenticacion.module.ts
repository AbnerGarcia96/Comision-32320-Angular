import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { AutenticacionRoutingModule } from './autenticacion-routing.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    AutenticacionRoutingModule,
    SharedModule
  ]
})
export class AutenticacionModule { }
