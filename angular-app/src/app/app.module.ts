import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VideoGame } from './videogame/videogame.component';
import { CursosComponent } from './cursos/cursos.component';
import { ZapatillaComponent } from './zapatilla/zapatilla.component';
import { FormsModule } from '@angular/forms';
import { ExternalComponent } from './external/external.component';

@NgModule({
  declarations: [
    AppComponent,
    VideoGame,
    CursosComponent,
    ZapatillaComponent,
    ExternalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
