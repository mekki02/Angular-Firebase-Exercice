import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from './store/post.reducer';
import { selectPosts } from './store/post.selectors';
import { PostListService } from './post-list/post-list.service';
import { Subject } from 'rxjs';
import { Post } from './post-list/post.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  protected posts$: Subject<Post[]> = new Subject();
  protected posts: Post[];

  constructor(private postsService: PostListService, private store: Store<State>) {
  }

  ngOnInit(): void {
    this.postsService.getPosts()
    this.store.select(selectPosts).subscribe( posts => {
      this.posts$.next(posts)
    });
    this.posts$.subscribe(result => {
      this.posts = result;
    });
  }
}
