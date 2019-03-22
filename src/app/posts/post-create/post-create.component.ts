import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Post } from '../post.model';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {

  entredTitle = '';
  entredContent = '';
  @Output() postCreated = new EventEmitter<Post>();

  constructor() { }

  ngOnInit() {
  }

  onAddPost() {
    const post: Post = {
      title: this.entredTitle,
      content: this.entredContent
    };
    this.postCreated.emit(post);
  }

}
