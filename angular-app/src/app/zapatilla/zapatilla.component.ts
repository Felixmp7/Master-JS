import { Component, OnInit } from '@angular/core';
import { Zapatilla } from '../models/zapatilla';
import { ZapatillaService } from '../services/zapatilla.service';

@Component({
  selector: 'zapatilla',
  templateUrl: './zapatilla.component.html',
  providers: [ ZapatillaService ]
})
export class ZapatillaComponent implements OnInit {
  public zapatillas:Array<Zapatilla> = [];
  public miZapatilla:string = '';

  constructor( public _zapatillaService: ZapatillaService) {
    console.log(this.zapatillas);
  }

  ngOnInit():void {
    this.zapatillas = this._zapatillaService.getZapatillas()
    console.log(this.zapatillas);
  }

  showMarca():void {
    alert(this.miZapatilla)
  }

}
