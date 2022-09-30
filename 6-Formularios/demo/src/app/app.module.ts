import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormularioReactivoComponent } from './components/formulario-reactivo/formulario-reactivo.component';
import { FormularoTemplateComponent } from './components/formularo-template/formularo-template.component';

@NgModule({
  declarations: [
    AppComponent,
    FormularioReactivoComponent,
    FormularoTemplateComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
