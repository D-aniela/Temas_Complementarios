import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appSwitchTableColor]',
})
export class SwitchTableColorDirective {
  constructor(private el: ElementRef, private render: Renderer2) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.render.setStyle(this.el.nativeElement, 'background', 'pink');

    const td = this.render.createElement('td');

    const button = this.render.createElement('button');
    const text = this.render.createText('Eliminar');

    const button2 = this.render.createElement('button');
    const text2 = this.render.createText('Actualizar');

    this.render.addClass(button, 'btn');
    this.render.addClass(button2, 'btn');
    this.render.addClass(button, 'btn-danger');
    this.render.addClass(button2, 'btn-primary');

    this.render.appendChild(button, text);
    this.render.appendChild(button2, text2);

    this.render.appendChild(td, button);
    this.render.appendChild(td, button2);

    this.render.appendChild(this.el.nativeElement, td);
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.render.setStyle(this.el.nativeElement, 'background', 'transparent');
    this.el.nativeElement.lastChild.remove();
  }

}
