import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-directive',
  templateUrl: './test-directive.component.html',
  styleUrls: ['./test-directive.component.css']
})
export class TestDirectiveComponent implements OnInit {

  visible : boolean;
  constructor() { }

  ngOnInit() {
    this.visible=true;
  }

  changeVisibility(){
    (this.visible)?this.visible=false:this.visible=true;
  }
}
