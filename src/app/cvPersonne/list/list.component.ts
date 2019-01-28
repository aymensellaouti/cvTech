import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Personne} from "../Personne";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Input() personnes : Personne[];
  @Output() sendPersonne = new EventEmitter();
  constructor() { }

  ngOnInit() {

  }
  test(){
    console.log('dans lost compo',this.personnes);
  }
  selectPersonne(event){
    console.log('list component',event.selectdItem);
    this.sendPersonne.emit(
      {
        'selectedItem':event.selectdItem
      }
    );

  }

}
