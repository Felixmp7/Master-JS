import { Component } from '@angular/core';
import { config } from './models/configuration';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title:string = 'AngularApp';
  public isShowCurses:boolean = true;
  public config;

  constructor(){
    this.config = config;
  }

  toggleShowCurses():void{
    this.isShowCurses = !this.isShowCurses;
  }
}
