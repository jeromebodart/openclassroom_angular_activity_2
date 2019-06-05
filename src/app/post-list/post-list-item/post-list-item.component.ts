import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {
  @Input() postName: string;
	@Input() postStatus: string;
	@Input() postLoveTts: number;
  @Input() postDate: Date;
  constructor() { }

  ngOnInit() {
  }

  incrementLoveits() {
  	this.postLoveTts++;
  }

  decrementLoveits() {
  	this.postLoveTts--;
  }

  getColor() {
  	if(this.postLoveTts > 0) {
  		return 'green';
  	} else if (this.postLoveTts < 0) {
  		return 'red';
  	}
  }

}
