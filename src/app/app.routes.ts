import { Routes, RouterModule } from '@angular/router';
import { NgClassComponent } from './components/directivas/ng-class/ng-class.component';
import { NgSwitchComponent } from './components/directivas/ng-switch/ng-switch.component';
import { PadreComponent } from './components/comunicacionComponentes/padre/padre.component';
import { Padre2Component } from './components/comunicacionComponentesRepaso/padre2/padre2.component';

const Rutas: Routes = [
  { path: 'switch', component: NgSwitchComponent },
  { path: 'class', component: NgClassComponent },
  { path: 'padre', component: PadreComponent },
  { path: 'padre2', component: Padre2Component },
];

export const APP_ROUTES = RouterModule.forRoot(Rutas);
