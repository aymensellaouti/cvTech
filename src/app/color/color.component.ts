import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {observeOn} from 'rxjs/operators';

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
    const promise = new Promise((resolve, reject) => {
      setInterval(() => {
        resolve('i am a promesse and i resolved');
      }, 5000);
    });

    promise.then(
      function (x) {
        console.log('resolved with value :', x);
      }
    );

    const observable = new Observable(
      (observer) => {
        let i = 5;
        setInterval(() => {
          if (!i) {
            observer.complete();
          }
          observer.next(i--);
        }, 1000);
      });
    observable.subscribe(
      (val) => {
        console.log(val);
      }
    );
  }
  constructor() { }
  changerCouleur(newColor) {
    this.color = newColor;
  }
  resetColor() {
    this.color = this.defaultColor;
  }



}
