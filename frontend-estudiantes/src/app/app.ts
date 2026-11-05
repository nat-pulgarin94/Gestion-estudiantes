import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EstudiantesComponent } from './components/estudiantes/estudiantes'; // Nombre de clase actualizado
 
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, EstudiantesComponent], // Nombre de clase actualizado aquí
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('frontend-estudiantes');
}
