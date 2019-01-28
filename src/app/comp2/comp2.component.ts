import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-comp2new',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit {

  @Input() myVar:any;
  constructor() { }

  ngOnInit() {
    this.myVar="val du fils";
  }

}
