import { Injectable } from '@angular/core';
import { Categoria } from './categoria/categoria.model';
import { PETLOVE_API } from '../app.api'
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  constructor(private http: HttpClient) { }

  obterCategorias(): Observable<Categoria[]>{
    return this.http.get<Categoria[]>(`${PETLOVE_API}/categorias`)
  
}
}
