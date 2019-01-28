import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {
  color: string;
  defaultColor: string;

  ngOnInit(): void {
    this.defaultColor = 'red';
    this.color = this.defaultColor;
  }

  constructor() { }
  changerCouleur(newColor) {
    this.color = newColor;
  }
  resetColor() {
    this.color = this.defaultColor;
  }



}
