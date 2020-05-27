import {
  Directive,
  HostBinding,
  HostListener,
  ElementRef,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appChangeTextColor]',
})
export class ChangeTextColorDirective {
  colors = [
    'purple',
    'pink',
    'hotpink',
    'gray',
    'lightblue',
    'red',
    'green',
    'brown',
  ];

  @HostBinding('style.color') color: string;
  @HostBinding('style.border-color') borderColor: string;
  @HostListener('keypress') newColor() {
    const escogerColor = Math.floor(Math.random() * this.colors.length);
    this.color = this.borderColor = this.colors[escogerColor];
  }

  constructor() {}
}
