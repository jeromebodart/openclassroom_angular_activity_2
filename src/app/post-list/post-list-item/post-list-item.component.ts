import { Component, OnInit, Input } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {
  @Input() id: number;
  @Input() postName: string;
	@Input() postStatus: string;
	@Input() postLoveTts: number;
  @Input() postDate: Date;
  constructor(private postService: PostsService) { }

  ngOnInit() {
  }

  incrementLoveits(id: number) {
  	this.postService.incrementPostLoveits(id);
  }

  decrementLoveits(id: number) {
  	this.postService.decrementPostLoveits(id);
  }

  deletPost(id: number) {
    this.postService.removePost(id);
  }

  getColor() {
  	if(this.postLoveTts > 0) {
  		return 'green';
  	} else if (this.postLoveTts < 0) {
  		return 'red';
  	}
  }

}
