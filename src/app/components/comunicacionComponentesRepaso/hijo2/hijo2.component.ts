import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hijo2',
  templateUrl: './hijo2.component.html',
  styles: [],
})
export class Hijo2Component implements OnInit {
  @Input() valueParent_Child: number;
  @Output() Operaciones = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {}

  public operacionMult() {
    this.valueParent_Child = this.valueParent_Child * 2;
    this.Operaciones.emit(this.valueParent_Child);
  }

  public operacionDividir() {
    this.valueParent_Child = this.valueParent_Child / 2;
    this.Operaciones.emit(this.valueParent_Child);
  }
}
