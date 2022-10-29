import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
import { CharactersComponent } from '../components/characters/characters.component';
import { AdminGuard } from '../guard/admin.guard';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'personajes', component: CharactersComponent, canActivate: [AdminGuard]}
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
