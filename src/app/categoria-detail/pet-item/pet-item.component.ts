import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { PetItem } from './pet-item.model'

@Component({
  selector: 'app-pet-item',
  templateUrl: './pet-item.component.html',
  styleUrls: ['./pet-item.component.css']
})
export class PetItemComponent implements OnInit {

  @Input() petItem: PetItem
  @Output() add = new EventEmitter()

  constructor() { }

  ngOnInit() {
  }

  EmitAddEvent(){
    this.add.emit(this.petItem)
  }

}
