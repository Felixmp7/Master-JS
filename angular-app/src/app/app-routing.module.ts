import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VideoGame } from './videogame/videogame.component';
import { ZapatillaComponent } from './zapatilla/zapatilla.component';

const routes: Routes = [
  { path: 'zapatilla', component: ZapatillaComponent },
  { path: 'videoGame', component: VideoGame },
  { path: '**', component: VideoGame },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
