import { RolService } from './../../services/rol.service';
import { HttpClient } from '@angular/common/http';
import { UserService } from './../../services/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { User } from 'src/app/models/user';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { throwToolbarMixedModesError } from '@angular/material/toolbar';
import { environment } from 'src/environments/environment.prod';
import { Role } from 'src/app/models/role';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent implements OnInit {
    public myForm !: FormGroup;
    user !: User;
    idUser:any;
    basePath:string=environment.api_url;

  constructor(
    private fb:FormBuilder, 
    private userService:UserService,
    private snackBar: MatSnackBar,
    private router:Router,
    private route:ActivatedRoute,
    private http : HttpClient,
    private rolService:RolService) {

    }

  ngOnInit(): void {
      this.myForm=this.fb.group({
        email:['',[Validators.required,Validators.email]],
        password:['',[Validators.required]]
      })
      
  }
  existeRolUsuario():void{
    this.http.get<any>(`${this.basePath}/roles`).subscribe(res=>{
      const rol = res.find((a:any)=>{
        return rol.name === "Usuario" });
      if(rol){
        this.snackBar.open('Inicie sesión o registrese c:', '', {
          duration: 3000,
        });
      }
      else{
        const rol:Role = { idRole: 1, roleUser:"Usuario"}
        this.rolService.addRol(rol).subscribe({
          next: (data) => {
            this.snackBar.open('Se creo el rol usuario!', '', {
              duration: 2000,
                      });
          },
          error: (err) => {
            console.log(err);
          },
        });
      }
    },err=>{
      alert("Algo esta mal!")
    })

  }
  existeRolPremium():void{
    this.http.get<any>(`${this.basePath}/roles`).subscribe(res=>{
      const rol = res.find((a:any)=>{
        return rol.name === "Premium" });
      if(rol){
        this.snackBar.open('Inicie sesión o registrese c:', '', {
          duration: 3000,
        });
      }
      else{
        const rol:Role = { idRole: 2, roleUser:"Premium" };
        this.rolService.addRol(rol).subscribe({
          next: (data) => {
            this.snackBar.open('Se creo el rol premium!', '', {
              duration: 2000,
                      });
          },
          error: (err) => {
            console.log(err);
          },
        });
      }
    },err=>{
      alert("Algo esta mal!")
    })

  }
  login(){
    this.http.get<any>(`${this.basePath}/users`)
    .subscribe(res=>{
      const user = res.find((a:any)=>{
        return a.email === this.myForm.value.email && a.password === this.myForm.value.password
      });
      if(user){
        this.snackBar.open('Login correcto!', '', {
          duration: 3500,
        });
        this.myForm.reset();
        this.router.navigate(['/homePage',user.id]);
      }else{
        this.snackBar.open('Error en las credenciales!', '', {
          duration: 3000,
        });
      }
    },err=>{
      alert("Algo esta mal!")
    })
  }


}
