import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VideoGame } from './videogame/videogame.component';
import { CursosComponent } from './cursos/cursos.component';
import { ZapatillaComponent } from './zapatilla/zapatilla.component';

@NgModule({
  declarations: [
    AppComponent,
    VideoGame,
    CursosComponent,
    ZapatillaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
