import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-padre2',
  templateUrl: './padre2.component.html',
  styles: [],
})
export class Padre2Component implements OnInit {
  public value = 0;

  constructor() {}

  ngOnInit(): void {}

  public operacionSuma() {
    this.value = this.value + 1;
  }

  public operacionResta() {
    this.value = this.value - 1;
  }

  public resultado(value) {
    this.value = value;
  }
}
