import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-comp-fils',
  templateUrl: './comp-fils.component.html',
  styleUrls: ['./comp-fils.component.css']
})
export class CompFilsComponent implements OnInit {

  @Input() myVar: string;
  constructor() { }

  ngOnInit() {
    this.myVar='var du fils';
  }


}
