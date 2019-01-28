import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-word',
  templateUrl: './word.component.html',
  styleUrls: ['./word.component.css']
})
export class WordComponent implements OnInit {

  couleur: string;
  font : string;
  size : string;
  constructor() { }

  ngOnInit() {
    this.couleur = 'blue';
    this.size = '35px';
    this.font = 'Verdana';
  }

  changeFont(mapolice){
    this.font = mapolice;
  }

  changeSize(taille){
    this.size = taille+'px';
  }

}
