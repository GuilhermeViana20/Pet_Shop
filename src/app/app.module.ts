import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { CategoriaComponent } from './categorias/categoria/categoria.component';
import { CategoriasService } from './categorias/categorias.service';
import { CategoriaDetailComponent } from './categoria-detail/categoria-detail.component';
import { CadastroAdocaoComponent } from './cadastro-adocao/cadastro-adocao.component';
import { ControleComponent } from './controle/controle.component';
import { PetComponent } from './categoria-detail/pet/pet.component';
import { PetItemComponent } from './categoria-detail/pet-item/pet-item.component';
import { CadastroCategoriaComponent } from './controle/cadastro-categoria/cadastro-categoria.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    CategoriasComponent,
    CategoriaComponent,
    CategoriaDetailComponent,
    CadastroAdocaoComponent,
    ControleComponent,
    PetComponent,
    PetItemComponent,
    CadastroCategoriaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [CategoriasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
