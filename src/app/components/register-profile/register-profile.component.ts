import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { User } from './../../models/user';
import { UserService } from './../../services/user.service';
import { Profile } from 'src/app/models/profile';
import { ProfileService } from 'src/app/services/profile.service';
 
@Component({
  selector: 'app-register-profile',
  templateUrl: './register-profile.component.html',
  styleUrls: ['./register-profile.component.css']
})
export class RegisterProfileComponent implements OnInit {
  myForm !: FormGroup;
  user!:any;
  userId!: number;
  email: any;
  password: any;
  username: any;
  usr !: any;
  selectedFile: any;
  nameImg: string = '';
  registro:boolean = false;

  constructor( private fb:FormBuilder,
    private userService:UserService,
    private profileService: ProfileService,
    private snackBar: MatSnackBar,
    private router:Router) {this.reactiveForm(); }

  ngOnInit(): void {
    this.userService.getUserMaxId().subscribe((data) => {
      this.user = data;
      this.userId = this.user.id;
    });
  }
  reactiveForm(){
    this.myForm = this.fb.group({
      id:[''],
      name: ['',[Validators.required,Validators.maxLength(20)]],
      lastName:['',[Validators.required,Validators.maxLength(20) ]],
      phone:['',[Validators.required]],
      img:['',[Validators.required]],
      grade: ['',[Validators.required,Validators.maxLength(20)]],
    })
  }
  onFileChanged(event: any) {
    this.selectedFile = event.target.files[0];
    console.log(this.selectedFile);
    this.nameImg = event.target.files[0].name;
  }
  deleteUser(): void{
    this.userService.deleteUser(this.userId).subscribe({
      next: (data) => {
        this.snackBar.open('Se elimino el user creado!', '', {
          duration: 2000,
        });
        this.router.navigate(['/']);
      },
      error: (err) => {
        console.log(err);
      }});
     
  }
  saveProfile():void{
    
    this.userService.getUsers()
    .subscribe(res=>{
      const usu = res.find((a:any)=>{
        return a.id === this.userId;
      });
      if(usu){
        const perfil: Profile = {
          id: usu.id,
          user: usu,
          name: this.myForm.get('name')!.value,
          lastName: this.myForm.get('lastName')!.value,
          phone: this.myForm.get('phone')!.value,
          img:this.selectedFile,
          grade: this.myForm.get('grade')!.value,
        }
        const uploadImageData = new FormData();
        uploadImageData.append('picture', perfil.img, perfil.img.name);
        uploadImageData.append('userId', perfil.user.id.toString())
        uploadImageData.append('name', perfil.name)
        uploadImageData.append('lastname', perfil.lastName)
        uploadImageData.append('phone', perfil.phone)
        uploadImageData.append('grade', perfil.grade)

        this.profileService.addProfile(uploadImageData).subscribe({ 
          next: (data) => {
          this.snackBar.open('El perfil fue registrado con exito!', '', {
            duration: 2000,
          });
          this.router.navigate(['/']);
        },
        error: (err) => {
          console.log(err);
        },
      });
      }else{
        this.snackBar.open(' No se añadio el profile!', '', {
          duration: 3000,
        });
      }
    },err=>{
      alert("Algo esta mal!")
    })
   
}
}
