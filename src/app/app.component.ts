import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  //template: '<h1> Hola Prueba de Angular </h1>',
  styleUrl: './app.component.css'
  /*styles: [`
  h1{
    color: red;
  }
  `]*/
})
export class AppComponent {
  title = 'aprendiendo_angular';
}
