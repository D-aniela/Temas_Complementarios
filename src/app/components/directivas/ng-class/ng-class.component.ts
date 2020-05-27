import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-class',
  templateUrl: './ng-class.component.html',
  styles: [],
})
export class NgClassComponent implements OnInit {
  public color: boolean = false;
  public people: any[] = [
    {
      name: 'Douglas Pace',
      age: 35,
      country: 'MARS',
    },
    {
      name: 'Jose Carlos',
      age: 23,
      country: 'MX',
    },
    {
      name: 'Chinese',
      age: 23,
      country: 'CH',
    },
    {
      name: 'Cesar',
      age: 27,
      country: 'USA',
    },
    {
      name: 'MANY',
      age: 27,
      country: 'SP',
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  public getColor(country: string) {
    switch (country) {
      case 'MX':
        return 'red';
      case 'CH':
        return 'blue';
      case 'USA':
        return 'purple';
      case 'SP':
        return 'gray';
      default:
        return 'brown';
    }
  }
}
