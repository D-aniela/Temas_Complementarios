import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { CheckExistImagePipe } from './components/pipes/check-exist-image.pipe';
import { CambiarContrasenaPipe } from './components/pipes/cambiar-contrasena.pipe';
import { NgSwitchComponent } from './components/directivas/ng-switch/ng-switch.component';
import { NgClassComponent } from './components/directivas/ng-class/ng-class.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';

import { APP_ROUTES } from "./app.routes";
import { RandomColorDirective } from './components/directivas/random-color.directive';
import { ChangeColorDirective } from './components/directivas/change-color.directive';
import { ChangeTextColorDirective } from './components/directivas/change-text-color.directive';
import { PadreComponent } from './components/comunicacionComponentes/padre/padre.component';
import { Hijo1Component } from './components/comunicacionComponentes/hijo1/hijo1.component';
import { Padre2Component } from './components/comunicacionComponentesRepaso/padre2/padre2.component';
import { Hijo2Component } from './components/comunicacionComponentesRepaso/hijo2/hijo2.component';
import { NgSwitchColorComponent } from './components/directivas/ng-switch-color/ng-switch-color.component';
import { SwitchTableColorDirective } from './components/directivas/switch-table-color.directive';

@NgModule({
  declarations: [
    AppComponent,
    PipesComponent,
    CheckExistImagePipe,
    CambiarContrasenaPipe,
    NgSwitchComponent,
    NgClassComponent,
    NavbarComponent,
    RandomColorDirective,
    ChangeColorDirective,
    ChangeTextColorDirective,
    PadreComponent,
    Hijo1Component,
    Padre2Component,
    Hijo2Component,
    NgSwitchColorComponent,
    SwitchTableColorDirective
  ],
  imports: [
    BrowserModule,
    APP_ROUTES
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
