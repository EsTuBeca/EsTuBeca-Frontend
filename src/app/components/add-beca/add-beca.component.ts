import { Beca } from './../../models/beca';
import { Router, ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BecaService } from './../../services/beca.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-beca',
  templateUrl: './add-beca.component.html',
  styleUrls: ['./add-beca.component.css']
})
export class AddBecaComponent implements OnInit {
  myForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private BecaService: BecaService,
    private snackBar: MatSnackBar,
    private router: Router,
    public route:ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.reactiveForm();
  }

  reactiveForm() {
    this.myForm = this.fb.group({
      id: [''],
      title: ['', [Validators.required, Validators.maxLength(60)]],
      imgUrl: ['', [Validators.required]],
      description: [''],
      requirements:[''],
      telephone:[''] ,
      urlpage:[''] ,
      benefits:['']
    });
  }

  saveBeca(): void {
    const beca: Beca= {
      id: 0,
      title: this.myForm.get('title')!.value,
      imgUrl: this.myForm.get('imgUrl')!.value,
      description: this.myForm.get('description')!.value,
      requirements: this.myForm.get('requirements')!.value,
      telephone: this.myForm.get('telephone')!.value,
      urlpage: this.myForm.get('urlpage')!.value,
      benefits:this.myForm.get('benefits')!.value,
    };
    this.BecaService.addBeca(beca).subscribe({
      next: (data) => {
        this.snackBar.open('La beca fue registrada con exito!', '', {
          duration: 6000,
        });
        this.router.navigate(['becas']);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
