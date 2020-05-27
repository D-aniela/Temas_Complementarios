import { Directive, ElementRef } from '@angular/core';
import { timer } from 'rxjs';
import { map } from 'rxjs/operators';

@Directive({
  selector: '[appRandomColor]',
})
export class RandomColorDirective {
  private arrayColors: Array<string> = [
    'blue',
    'purple',
    'pink',
    'orange',
    'brown',
  ];

  constructor(private el: ElementRef) {
    el.nativeElement.innerText = 'Hola Mundo';
  }

  public ChangeColor() {
    timer(0, 2000)
      .pipe(
        map(() => {
          let numeroAleatorio =
            Math.floor(Math.random() * (this.arrayColors.length - 0)) - 0;
          console.log(numeroAleatorio);

          return this.arrayColors[numeroAleatorio];
        })
      )
      .subscribe((color) => (this.el.nativeElement.style.background = color));

    // let x = this.arrayColors[2];

    // this.el.nativeElement.style.background = x;
  }
}
