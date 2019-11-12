import { Component, OnInit } from '@angular/core';
import { CategoriasService } from 'src/app/categorias/categorias.service';
import { ActivatedRoute } from '@angular/router'
import { Observable } from 'rxjs';


@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.css']
})
export class PetComponent implements OnInit {

pet: Observable<any>


  constructor(private categoriasService: CategoriasService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.pet = this.categoriasService.obterPetDeCategoria(this.route.parent.snapshot.params['id'])
  }



}
