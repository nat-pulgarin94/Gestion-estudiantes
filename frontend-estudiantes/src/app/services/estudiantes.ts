import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
 
@Injectable({
  providedIn: 'root'
})
export class EstudianteService {
  // Conexión directa a tus endpoints de Node.js/Express
  URL_API = 'http://localhost:3000/api/estudiantes';
 
  constructor(private http: HttpClient) { }
 
  // 1. Obtener todos los estudiantes 
  getEstudiantes(): Observable<any> {
    return this.http.get(this.URL_API);
  }
 
  // 2. Guardar un nuevo estudiante
  createEstudiante(estudiante: any): Observable<any> {
    return this.http.post(this.URL_API, estudiante);
  }
 
  // 3. Modificar un estudiante existente por su ID
  editEstudiante(id: string, estudiante: any): Observable<any> {
    return this.http.put(`${this.URL_API}/${id}`, estudiante);
  }
 
  // 4. Eliminar un estudiante mediante su ID
  deleteEstudiante(id: string): Observable<any> {
    return this.http.delete(`${this.URL_API}/${id}`);
  }
}
