import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, UntypedFormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Post } from 'src/app/models/post';
import { PostService } from 'src/app/services/post.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})

export class NewPostComponent implements OnInit {
  idUser: any;
  post: Post = {} as Post;
  postForm: UntypedFormGroup;
  tagField = new UntypedFormControl();
  user!: User;
  usr!:User;
  constructor( private postService: PostService,private userService:UserService,
    private route: ActivatedRoute,
    private router: Router,
    private fb: UntypedFormBuilder,
    private snackBar: MatSnackBar,) { 

  this.postForm = this.fb.group({
    id:[''],
    title: [''],
    description: [''],
    body: ['']
  });
  this.post.tagList = [];
}
  ngOnInit(): void {
    const variable = this.route.snapshot.paramMap.get('id2');
    this.idUser = variable;
    console.log("new-post "+ variable);
     }

  addTag(){
    // retrieve tag control
    const tag = this.tagField.value;
    // only add tag if it does not exist yet
    if (this.post.tagList.indexOf(tag) < 0) {
    this.post.tagList.push(tag);
    }
    // clear the input
    this.tagField.reset('');
  }
  removeTag(tagName: string){
    this.post.tagList = this.post.tagList.filter(tag => tag !== tagName);
  }
  submitForm(){
    
    const post:Post = {
      id: 0,
      slug: this.postForm.get('title')!.value,
      title: this.postForm.get('title')!.value,
      description: this.postForm.get('description')!.value,
      body: this.postForm.get('body')!.value,
      tagList: this.post.tagList,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      favorited: false,
      favoritesCount: 0,
      authorId:  Number(this.idUser)
    }

    // update the model
    this.updatePost(this.postForm.value);

    // post the changes
    this.postService.addPost(post).subscribe({
      next: (data) => {
        this.snackBar.open('El post fue registrado con exito!', '', {
          duration: 3000,
        });
        this.postForm.reset();
        this.router.navigate(['/homePage',this.idUser,'foro', this.idUser]);
      },
      error: (err) => {
        this.snackBar.open('No se logro añadir!', '', {
          duration: 3000,
        });
        console.log(err);
      },
    });;
    
  
  }
  updatePost(values: Object){
    Object.assign(this.post, values);
  }

}
