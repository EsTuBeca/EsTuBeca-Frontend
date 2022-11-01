import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/models/post';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-preview-post',
  templateUrl: './preview-post.component.html',
  styleUrls: ['./preview-post.component.css']
})
export class PreviewPostComponent implements OnInit {
  @Input() post!:Post;
  idPost:any;

   constructor(private postService: PostService,private router: Router,
    private route: ActivatedRoute) { }

   ngOnInit(): void {

   }
   onToggleFavorite(favorited: boolean) {
    this.post['favorite'] = favorited;

    if (favorited) {
      this.post['favoritesCount']++;
    } else {
      this.post['favoritesCount']--;
    }
  }

}
