import { Routes, RouterModule } from '@angular/router';
import { NgClassComponent } from './components/directivas/ng-class/ng-class.component';
import { NgSwitchComponent } from './components/directivas/ng-switch/ng-switch.component';


const Rutas: Routes=[
{path: 'switch', component: NgSwitchComponent},
{path: 'class', component: NgClassComponent}
]


export const APP_ROUTES = RouterModule.forRoot(Rutas);