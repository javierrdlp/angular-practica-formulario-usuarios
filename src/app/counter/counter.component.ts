import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.component.html',
})
export class CounterComponent implements OnInit{
   counter: number = 0;

  @Input() title!: string;

  @Output() counterEmmit: EventEmitter<number> = new EventEmitter();
  ngOnInit(): void {
    // aquí asignamos el valor del counter de la sesion al counter del componente y 
    // si no hay se pone 0
    // la primera vez que se acceda a la pagina no habrá ningun counter en la sesión 
    // por eso saldrá 0
    // local guarda incluso si cerramos la pestaña y sesion el otro solo aguanta 
    // el refresco
    this.counter = parseInt(sessionStorage.getItem('counter')!) || 0;
    // this.counter = (sessionStorage.getItem('counter') != undefined) ? 
    // parseInt(sessionStorage.getItem('counter')!) : 0;
    console.log('Creando comeponente');
  } 

  setCounter(): void{
    this.counter++;
    // cada vez que se cambia el estado del counter de nuestro component lo guardamos en el sesion storage
    // usamos setItem para crear un elemento counter en la session y guardar ahí el valor.
    sessionStorage.setItem('counter', this.counter.toString());
    this.counterEmmit.emit(this.counter);
  }

}
