import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @HostBinding('style.backgroundColor')bg = 'red';
  constructor() { }
  @HostListener('mouseover')mouseover() {
    this.bg = (this.bg === 'red') ? this.bg = 'yellow' : this.bg = 'red' ;
  }
}
