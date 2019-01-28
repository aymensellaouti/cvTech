import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {

  nom:String ;
  constructor() { }

  ngOnInit() {
    this.nom = "Aymen";
  }

  modifierNom(newName){
    this.nom=newName;
  }

}
