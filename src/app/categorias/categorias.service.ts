import { Injectable } from '@angular/core';
import { Categoria } from './categoria/categoria.model';
import { PETLOVE_API } from '../app.api'
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { PetItem } from '../categoria-detail/pet-item/pet-item.model';
// import { Pet } from '../categoria-detail/pet/pet.model';


@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  constructor(private http: HttpClient) { }

  obterCategorias(): Observable<Categoria[]>{
    return this.http.get<Categoria[]>(`${PETLOVE_API}/categorias`)
  }

  obterCategoriaById(id:string): Observable<Categoria>{
    return this.http.get<Categoria>(`${PETLOVE_API}/categorias/${id}`)
  }

  obterPetDeCategoria(id: string): Observable<PetItem>{
  return this.http.get<PetItem>(`${PETLOVE_API}/categorias/${id}/pets`)
}

}
