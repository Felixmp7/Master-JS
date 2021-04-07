import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';

@Component({
  selector: 'cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})


/*
  Hooks

  OnInit: Metodo llamado al cargar un componente.
  DoCheck: Se ejecuta cuando ocurre algun cambio en el componente o en la app.
  OnDestroy: Se ejecuta antes de eliminar una instancia de un componente.

*/
export class CursosComponent implements OnInit, DoCheck, OnDestroy {

  public title:string = 'Mi componente';

  constructor() {
    console.log('Constructor');
  }

  ngOnInit(): void {
    console.log('onInit')
  }
  ngDoCheck(): void {
    console.log('OnChange')
  }
  ngOnDestroy(): void {
    console.log('onDestroy')
  }

  changeTitle():void {
    this.title = 'Nuevo Titulo';
  }

}
