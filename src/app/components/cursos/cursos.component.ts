import { Component, OnInit } from '@angular/core';
import { Curso } from 'src/app/models/curso';
import { User } from './../../models/user';
import {CursoService} from './../../services/curso.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute} from '@angular/router';
import { environment } from './../../../environments/environment';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {
  curso!: Curso[];
  user!:any;
  userId:any;
  cursoId:any;
  snackBar: any;
  // isReadMore: boolean=false;
  data!: string;
  
  constructor(public route:ActivatedRoute,
    private cursoService:CursoService) { }

  ngOnInit(): void {
    this.userId = this.route.snapshot.paramMap.get('id4');
    this.getCurso();
/*     this.checkDataLength(this.data); */
  }

  getCurso(){
    this.cursoService.getCurso().subscribe((data:Curso[])=>{
      this.curso= data;
    })
  }
  deleteCurso(id: number) {
    this.cursoService.deleteCurso(id).subscribe(() => {
      this.curso = this.curso.filter((e: Curso) => {
        return e.id !== id ? e : false;
      });
      this.snackBar.open('El curso fue eliminado con exito!', '', {
        duration: 6000,
      });
    });
  }

    processCursoResponse(resp: any) {
      const dateCurso: Curso[] = [];
  
      
      this.data
   
    }

    filterCursoByName(name: any) {
      if (name.length === 0) {
        return this.getCurso();
      }
  
      this.cursoService.getCursoByName(name).subscribe((resp: any) => {
        this.processCursoResponse(resp);
      });
    }
  }

