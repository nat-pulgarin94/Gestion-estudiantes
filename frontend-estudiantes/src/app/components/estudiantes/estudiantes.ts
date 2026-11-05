import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EstudianteService } from '../../services/estudiantes'; // Ruta corregida
 
@Component({
  selector: 'app-estudiantes',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './estudiantes.html', 
  styleUrl: './estudiantes.css'     
})
export class EstudiantesComponent implements OnInit {
  listaEstudiantes: any[] = [];

  // Estructura para el formulario
  estudianteSeleccionado = {
    _id: '',
    name: '',
    age: 0,
    city: '',
    position: '',
    office: '',
    salary: 0
  };
 

  constructor(private estudianteService: EstudianteService) {}
 
  ngOnInit(): void {
    this.obtenerEstudiantes();
  }
 
  obtenerEstudiantes() {
    this.estudianteService.getEstudiantes().subscribe({
      next: (res) => this.listaEstudiantes = res,
      error: (err) => console.error(err)
    });
  }
 
  guardarEstudiante(form: any) {
    if (this.estudianteSeleccionado._id) {
      // Si tiene ID, actualiza el registro existente
      this.estudianteService.editEstudiante(this.estudianteSeleccionado._id, this.estudianteSeleccionado).subscribe({
        next: () => {
          this.obtenerEstudiantes();
          this.limpiarFormulario(form);
        },
        error: (err) => console.error(err)
      });
    } else {
      // Si no tiene ID, es un estudiante nuevo
      const { _id, ...nuevoEstudiante } = this.estudianteSeleccionado;
      this.estudianteService.createEstudiante(nuevoEstudiante).subscribe({
        next: () => {
          this.obtenerEstudiantes();
          this.limpiarFormulario(form);
        },
        error: (err) => console.error(err)
      });
    }
  }
 
  editarEstudiante(estudiante: any) {
    this.estudianteSeleccionado = { ...estudiante };
  }
 
  eliminarEstudiante(id: string) {
    if (confirm('¿Estás seguro de que deseas eliminar este estudiante?')) {
      this.estudianteService.deleteEstudiante(id).subscribe({
        next: () => this.obtenerEstudiantes(),
        error: (err) => console.error(err)
      });
    }
  }
 
  limpiarFormulario(form: any) {
    form.reset();
    this.estudianteSeleccionado = { _id: '', name: '', age: 0, city: '', position: '', office: '', salary: 0 };
  }
}
