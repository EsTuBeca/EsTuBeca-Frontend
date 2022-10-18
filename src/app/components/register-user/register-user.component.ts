import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { User } from './../../models/user';
import { UserService } from './../../services/user.service';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {
  myForm !: FormGroup;

  constructor( private fb:FormBuilder,
    private userService:UserService,
    private snackBar: MatSnackBar,
    private router:Router) {this.reactiveForm(); }

  ngOnInit(): void {
  }
  reactiveForm(){
    this.myForm = this.fb.group({
      id:[''],
      name: ['',[Validators.required,Validators.maxLength(20)]],
      lastname:['',[Validators.required,Validators.maxLength(20) ]],
      phone:['',[Validators.required]],
      grade: ['',[Validators.required,Validators.maxLength(20)]],
      email:['',[Validators.required,Validators.email]],
      username:['',[Validators.required]],
      password:['',[Validators.required]],
    })
  }
  saveUser():void{
    const user: User= {
      id: 0,
      name: this.myForm.get('name')!.value,
      lastname: this.myForm.get('lastname')!.value,
      phone: this.myForm.get('phone')!.value,
      grade: this.myForm.get('grade')!.value,
      email: this.myForm.get('email')!.value,
      username: this.myForm.get('username')!.value,
      password: this.myForm.get('password')!.value,
    };
    this.userService.addUser(user).subscribe({
      next: (data) => {
        this.snackBar.open('El usuario fue registrado con exito!', '', {
          duration: 3000,
        });
        this.router.navigate(['/']);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
