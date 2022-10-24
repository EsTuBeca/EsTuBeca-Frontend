import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment.prod';
import { Post } from '../models/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  basePath:string=environment.posts_url;
  constructor(private http: HttpClient) { }
  
  getPosts() {
    return this.http.get<Post[]>(this.basePath);
  }

  getPostId(id:any){
    return this.http.get<Post>(`${this.basePath}/${id}`);
  }
  addPost(post: Post) {
    return this.http.post<Post>(
      this.basePath,
      post
    );  
  }
  updatePost(id: any, post: Post) {
    return this.http.put<Post>(`${this.basePath}/${id}`, post);
  }
  deletePost(id: any) {
    return this.http.delete<Post>(`${this.basePath}/${id}`);
  }
}
