import { environment } from './../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  basePath:string=environment.basePath;
  constructor(private http: HttpClient) { }
  getUsers() {
    return this.http.get<User[]>(this.basePath);
  }

  getUserId(id:any){
    return this.http.get<User>(`${this.basePath}/${id}`);
  }
  addUser(user: User) {
    return this.http.post<User>(
      this.basePath,
      user
    );  
  }
  updateUser(id: any, user: User) {
    return this.http.put<User>(`${this.basePath}/${id}`, user);
  }
  deleteUser(id: any) {
    return this.http.delete<User>(`${this.basePath}/${id}`);
  }
}
