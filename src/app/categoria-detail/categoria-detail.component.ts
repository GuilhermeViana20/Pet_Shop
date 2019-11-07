import { Component, OnInit } from '@angular/core';
import { CategoriasService } from '../categorias/categorias.service';
import { Categoria } from '../categorias/categoria/categoria.model';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-categoria-detail',
  templateUrl: './categoria-detail.component.html',
  styleUrls: ['./categoria-detail.component.scss']
})
export class CategoriaDetailComponent implements OnInit {

  categoria: Categoria

  constructor(private categoriasService: CategoriasService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    // this.listarPets();

  }

    // listarPets(){
    //   this.categoriasService.categoriaById(this.route.snapshot.params['id'])
    //   .subscribe(categoria => this.categoria = categoria)
    // }

}
