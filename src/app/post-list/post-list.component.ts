import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../utils/reducers';
import { selectPosts } from '../store/post.selectors';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  public posts;

  constructor(public router: Router, private store: Store<AppState>) {}

  ngOnInit() { 
    this.posts = this.store.select(selectPosts)
  }
}
