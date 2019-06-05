import { Component, OnInit, OnDestroy } from '@angular/core';
import { PostListItemComponent } from './post-list-item/post-list-item.component';
import { PostsService } from '../services/posts.service'
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { Post } from '../models/post.model';
// import { Post } from '../models/post.model';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit, OnDestroy {

  // @Input() postlists: Post[];

  postlists: Post[];
  postSubscription: Subscription;

  constructor(private postService: PostsService, private router: Router) { };

  ngOnInit() {
    this.postSubscription = this.postService.postsSubject.subscribe(
      (posts: Post[]) => {
        this.postlists = posts;
      },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
    );
    this.postService.emitPostSubject();
  }

  onNewPost(post: Post) {
    this.postService.createNewPost(post);
  // this.router.navigate(['/posts', 'new']);
  }

 // ondeletePost(post: Post) {
   // this.postService.removePost(post);
  //}

  ngOnDestroy() {
    this.postSubscription.unsubscribe();
  }
}
