import { Tema } from './../../models/tema';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CursoService } from './../../services/curso.service';
import { Curso } from 'src/app/models/curso';
import { TemaService } from 'src/app/services/tema.service';
@Component({
  selector: 'app-edit-curso',
  templateUrl: './edit-curso.component.html',
  styleUrls: ['./edit-curso.component.css']
})
export class EditCursoComponent implements OnInit {

  cursos:Curso[]=[];
  myForm!: FormGroup;
  curso!: Curso;
  tema!: Tema;
  idCurso: any;
  idUser:any;
  idTema:any;

  constructor(
    private fb: FormBuilder,
    private cursoService: CursoService,
    private snackBar: MatSnackBar,
    private router: Router,
    public route: ActivatedRoute,
    private temaService:TemaService
  ) {}

  ngOnInit(): void {
    const variable2 = this.route.snapshot.paramMap.get('id4');
    this.idUser = variable2;
    
    const variable = this.route.snapshot.paramMap.get('curso');
    this.idCurso= variable;

    this.cursoService.getCursoId(this.idCurso).subscribe((data) => {
      this.curso = data;
      this.myForm = this.fb.group({
        name: [this.curso.name,[Validators.required, Validators.maxLength(60)]],
        description: [this.curso.description],
        finished:false,
        cost:this.curso.cost
      });
    })
  }

  
  updateCurso() {
    const variable = this.route.snapshot.paramMap.get('id4');
    const curso: Curso = {
      id: this.idCurso,
      name: this.myForm.get('name')!.value,
      description: this.myForm.get('description')!.value,
      finished:false,
      cost:this.myForm.get('cost')!.value
    };
    this.cursoService
      .updateCurso(this.idCurso, curso)
      .subscribe({
        next: (data) => {
          this.snackBar.open('El curso fue actualizado con exito!', '', {
            duration: 6000,
          });
          this.router.navigate(['/homePage',variable,'cursos',variable]);
        },
        error: (err) => {
          console.log(err);
        },
      });
  }
  updateTema() {
    const variable = this.route.snapshot.paramMap.get('id4');
    const tema: Tema = {
      id: this.idTema,
      position:this.myForm.get('position')!.value,
      title: this.myForm.get('title')!.value,
      description: this.myForm.get('description')!.value,
      body:this.myForm.get('body')!.value,
      video:this.myForm.get('video')!.value,
      curso:this.curso
    };
    this.temaService
      .editTema(this.idTema, tema)
      .subscribe({
        next: (data) => {
          this.snackBar.open('El tema fue actualizado con exito!', '', {
            duration: 6000,
          });
          this.router.navigate(['/homePage',variable,'temas',variable]);
        },
        error: (err) => {
          console.log(err);
        },
      });
  }
}
