import { Component, OnInit } from '@angular/core';
import { CategoriasService } from 'src/app/categorias/categorias.service';
import { ActivatedRoute } from '@angular/router'
import { Observable } from 'rxjs';
import { PetItem } from '../pet-item/pet-item.model';


@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.css']
})
export class PetComponent implements OnInit {

pet: Observable<PetItem>


  constructor(private categoriasService: CategoriasService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.listarPetsDeCategoria();

  }

  listarPetsDeCategoria(){
  this.pet = this.categoriasService
  .obterPetDeCategoria(this.route.snapshot.params['id'])
}



}
