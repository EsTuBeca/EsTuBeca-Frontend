import { Tema } from './../../models/tema';
import { TemaService } from './../../services/tema.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Curso } from 'src/app/models/curso';
import { CursoService } from 'src/app/services/curso.service';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-curso-detalle',
  templateUrl: './curso-detalle.component.html',
  styleUrls: ['./curso-detalle.component.css']
})
export class CursoDetalleComponent implements OnInit {
  temas!:Tema[];
  curso!:Curso;
  userId:any;
  tema!:Tema;
  idCurso:any;
  snackBar: any;
  constructor(private cursoService:CursoService,
    private router:Router,
    private route:ActivatedRoute,
    private temaService:TemaService,
    private fb: UntypedFormBuilder
    ) { 
    }

  ngOnInit(): void {
    this.userId=this.route.snapshot.paramMap.get('user');
    this.idCurso=this.route.snapshot.paramMap.get('curso');
    console.log("Curso: "+ this.idCurso);

    this.cursoService.getCursoId(this.idCurso).subscribe((data)=>{
      this.curso =data;
      this.curso.name=data.name;
      this.curso.description=data.description;
      this.curso.finished=data.finished;
      this.curso.cost=data.cost;
    });
    this.temaService.getTemas().subscribe((data) => { this.temas = data;});
    this.temaService.temasByCurso(this.idCurso).subscribe((data) =>{
      this.temas = data;
    });
  }
  deleteTema(id: number) {
    this.temaService.deleteTema(id).subscribe(() => {
      this.temas = this.temas.filter((e: Tema) => {
        return e.id !== id ? e : false;
      });
      this.snackBar.open('La beca fue eliminada con exito!', '', {
        duration: 6000,
      });
    });
  }

}
