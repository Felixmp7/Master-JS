import { Component, OnInit } from '@angular/core';
import { Zapatilla } from '../models/zapatilla';

@Component({
  selector: 'zapatilla',
  templateUrl: './zapatilla.component.html',
})
export class ZapatillaComponent implements OnInit {
  public zapatillas:Array<Zapatilla>;
  public miZapatilla:string = '';

  constructor() {
    this.zapatillas = [
      new Zapatilla('Nike Air', 'Nike', 'Black', 100, true),
      new Zapatilla('Nike Pegasus', 'Nike', 'White', 120, true),
      new Zapatilla('Nike Mercurial', 'Nike', 'Blue', 80, false),
      new Zapatilla('Nike Hypervenom', 'Nike', 'Orange', 40, true),
    ]
  }

  ngOnInit(): void {
    console.log(this.zapatillas);
  }

  showMarca(){
    alert(this.miZapatilla)
  }

}
