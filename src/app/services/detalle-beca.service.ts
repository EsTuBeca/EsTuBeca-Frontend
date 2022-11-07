import { DetalleBeca } from './../models/detalle-beca';
import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment.prod';
import { Beca } from '../models/beca';
import { HttpClient, HttpParams } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DetalleBecaService {

  basePath1:string=environment.api_url;
  getBecaId(id:any){
    return this.http.get<Beca>(`${this.basePath1}/becas/${id}`);
  }
  constructor(private http: HttpClient) { }
 

}
