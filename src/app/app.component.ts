import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CounterComponent } from './counter/counter.component';

@Component({
  selector: 'app-root',
  imports: [CounterComponent, CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  
  title: string = 'Hola mundo Angular desde componente!';
  subTitle = 'Contador con estado de session'
  users: string[] = ['Pepe', 'Maria', 'Juan', 'Andres'];
 // users1: string[] = [];
 // users2!: string[];
 // users3?: string[]; 
  
  visible: boolean = false;

  counter: number = 0;
  ngOnInit(): void {
    this.counter = parseInt(sessionStorage.getItem('counter')!) || 0; 
  }

  setVisible(): void {
    this.visible = !this.visible;
    console.log('hemos hecho click en setVisible');
  }

  setCounter(counter: number): void{
    this.counter = counter

  }
}
