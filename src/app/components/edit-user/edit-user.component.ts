import { environment } from './../../../environments/environment';
import { User } from './../../models/user';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from './../../services/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit, resolveForwardRef } from '@angular/core';
import { ReadVarExpr } from '@angular/compiler';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  myForm!: FormGroup;
  user!: User;
  idUser: any;
  public imgfiles: any = [];
  public previewImg!: string;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private snackBar: MatSnackBar,
    private router: Router,
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit(): void {
    const variable = this.route.snapshot.paramMap.get('id');
    this.idUser = variable;
    //this.idUser = this.route.snapshot.paramMap.get('id');
    this.userService.getUserId(this.idUser)
    .subscribe((data) => {
      this.user = data;
      this.myForm = this.fb.group({
        name: [this.user.name,[Validators.required,Validators.maxLength(20)]],
        lastname:[this.user.lastname,[Validators.required,Validators.maxLength(20) ]],
        phone:[this.user.phone,[Validators.required]],
        grade: [this.user.grade,[Validators.required,Validators.maxLength(20)]],
        email:[this.user.email,[Validators.required,Validators.email]],
        username:[this.user.username,[Validators.required]],
        password:[this.user.password,[Validators.required]],
      });
    })
  }

  updateUser() {
    const variable = this.route.snapshot.paramMap.get('id');
    const user: User= {
      id: this.idUser,
      name: this.myForm.get('name')!.value,
      lastname: this.myForm.get('lastname')!.value,
      phone: this.myForm.get('phone')!.value,
      grade: this.myForm.get('grade')!.value,
      email: this.myForm.get('email')!.value,
      username: this.myForm.get('username')!.value,
      password: this.myForm.get('password')!.value,
    };
    this.userService.updateUser(this.idUser, user).subscribe({
      next: (data) => {
        this.snackBar.open('Actualización exitosa!', '', {
          duration: 3000,
        });
        this.router.navigate(['/homePage',variable]);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  cancelUser() {
    const variable = this.route.snapshot.paramMap.get('id');
    this.router.navigate(['/homePage',variable]);
  }
  captureFile(event): any{
    const catchedFile = event.target.files[0];
    this.getBase64(catchedFile).then((imagen: any)=>{
      this.previewImg=imagen.base; 
      console.log(imagen);
    })
  }
  getBase64 = async($event: any)=> new Promise((resolve)=>{
    try{
      const unsafeImg= window.URL.createObjectURL($event);
      const image = this.sanitizer.bypassSecurityTrustUrl(unsafeImg);
      const reader = new FileReader();
      reader.readAsDataURL($event);
      reader.onload=()=>{
        resolve({
          base: reader.result
        });
      };
      reader.onerror = error=>{
        resolve({
          base:null
        });
      };  
    }catch(e){
      return null;
    }
  })
}