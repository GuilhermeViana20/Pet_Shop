import { Component, OnInit } from '@angular/core';
import { CategoriasService } from './categorias.service';
import { Categoria } from './categoria/categoria.model';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {

  categorias: Categoria[]

  constructor(private categoriasService: CategoriasService) { }

  ngOnInit() {
    this.listarCategorias();
  }

  listarCategorias(){
    this.categoriasService.obterCategorias()
      .subscribe(categorias => this.categorias = categorias)
  }

}
