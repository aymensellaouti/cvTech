import {Directive, HostBinding, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @Input() bgColorIn = 'red';
  @Input() bgColorOut = 'yellow';
  @HostBinding('style.backgroundColor')bg = 'red';
  constructor() { }
  @HostListener('mouseover')mouseover() {
    (this.bg === this.bgColorIn) ? this.bg = this.bgColorOut : this.bg = this.bgColorIn ;
  }
}
