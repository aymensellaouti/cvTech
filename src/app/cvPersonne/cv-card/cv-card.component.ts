import {Component, Input, OnInit} from '@angular/core';
import {Personne} from "../Personne";

@Component({
  selector: 'app-cv-card',
  templateUrl: './cv-card.component.html',
  styleUrls: ['./cv-card.component.css']
})
export class CvCardComponent implements OnInit {

  @Input() selectedPersonne : Personne;
  constructor() { }

  ngOnInit() {

  }

}
