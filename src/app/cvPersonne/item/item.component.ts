import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Personne} from "../Personne";

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input() personne : Personne;
  constructor() { }

  @Output() selectItem = new EventEmitter();
  ngOnInit() {
    console.log(this.personne);
  }

  selectPersonne(){
     this.selectItem.emit(
       {
         selectdItem : this.personne
       }
     );
     console.log('event from item emis');
  }
}
