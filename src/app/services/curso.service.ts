import { Injectable } from '@angular/core';
import { Curso } from '../models/curso';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CursoService {
  basePath2:string=environment.api_url;
  constructor(private http: HttpClient) {
   }
   getCurso() {
    return this.http.get<Curso[]>(`${this.basePath2}/cursos`);
  }
  getCursoId(id:any){
    return this.http.get<Curso>(`${this.basePath2}/cursos/${id}`);
  }
  addCurso(beca: Curso) {
    return this.http.post<Curso>(
      `${this.basePath2}/cursos`,
      beca
    );  
  }
  updateCurso(id: any, curso: Curso) {
    return this.http.put<Curso>(`${this.basePath2}/cursos/${id}`, curso);
  }
  deleteCurso(id: any) {
    return this.http.delete<Curso>(`${this.basePath2}/cursos/${id}`);
  }
  getCursoByName(name: any) {
    const endpoint = `${this.basePath2}/cursos/filter/${name}`;
    return this.http.get<Curso>(endpoint);
  }
}
