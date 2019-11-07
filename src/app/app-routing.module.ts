import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent} from './home/home.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { CategoriaDetailComponent } from './categoria-detail/categoria-detail.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'categorias', component: CategoriasComponent},
  {path: 'categorias/:id', component: CategoriaDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
