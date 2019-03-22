import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  posts = [
    { title: 'first', content: 'hkeya'},
    { title: 'second', content: 'hkeya okhra'},
    { title: 'third', content: 'hkeya okhra jemla'}
  ];

  constructor() { }

  ngOnInit() {
  }
}
