import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-switch',
  templateUrl: './ng-switch.component.html',
  styles: [
  ]
})
export class NgSwitchComponent implements OnInit {

  public people:any[]=[
    {
      name:"Douglas Pace",
      age: 35,
      country:"MARS",
    },
    {
      name:"Jose Carlos",
      age: 23,
      country:"MX",
    },
    {
      name:"Chinese",
      age: 23,
      country:"CH",
    },
    {
      name:"Cesar",
      age: 27,
      country:"USA",
    },
    {
      name:"MANY",
      age: 27,
      country:"SP",
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
