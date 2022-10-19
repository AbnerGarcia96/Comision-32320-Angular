import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ContactoComponent } from "./components/contacto/contacto.component";
import { InicioComponent } from "./components/inicio/inicio.component";
import { PaginaNoEncontradaComponent } from "./components/pagina-no-encontrada/pagina-no-encontrada.component";

const rutas: Routes = [
    { path: 'inicio', component: InicioComponent },
    { path: 'contacto', component: ContactoComponent },
    { path: '', redirectTo: 'inicio', pathMatch: 'full' },
    { path: '**', component: PaginaNoEncontradaComponent}
]

@NgModule({
    imports: [
        RouterModule.forRoot(rutas)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule{}