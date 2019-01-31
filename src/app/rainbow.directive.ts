import {Directive, ElementRef, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appRainbow]'
})
export class RainbowDirective {
  couleurs = [
    'red',
    'blue',
    'pink',
    'purple',
    'lightblue',
    'skyblue',
    'deepskyblue',
    'coral',
    'lightcoral'
  ];
  @HostBinding('style.borderColor') color: string;
  @HostBinding('style.color') fontColor: string;
  constructor(private el: ElementRef) { }
  @HostListener('keypress') changeColor() {
    const random = Math.floor((Math.random() * this.couleurs.length));
    this.color = this.couleurs[random];
    this.fontColor = this.couleurs[random];
  }
}
