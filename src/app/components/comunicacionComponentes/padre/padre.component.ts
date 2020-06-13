import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styles: [],
})
export class PadreComponent implements OnInit {
  public valorPadre;
  public genkidamaImg: string = '';

  constructor() {}

  ngOnInit(): void {}

  getValorPadre(value: string) {
    this.valorPadre = value;
  }

  public reunirEnergia(energiaCompleta) {
    if (energiaCompleta) {
      this.genkidamaImg = './../../../../assets/genkidama.gif';
    }
  }
}
