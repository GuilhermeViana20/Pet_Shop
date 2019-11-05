import { Component, OnInit, Input } from '@angular/core';
import { Categoria } from './categoria.model';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {

  @Input() categoria: Categoria

  constructor() { }

  ngOnInit() {
  }

}
