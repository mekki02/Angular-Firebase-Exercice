import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../post.model';
import { PostListService } from '../post-list.service';
@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input() post: Post;

  constructor(private postsService: PostListService) { }

  ngOnInit() {
  }

  increaseLoveIts(): void {
    const newLoveIts = this.post.loveIts + 1;
    this.postsService.updatePost(this.post, {loveIts: newLoveIts})
  }

  decreaseLoveIts(): void {
    const newLoveIts = this.post.loveIts - 1;
    this.postsService.updatePost(this.post, {loveIts: newLoveIts})
  }

  deletePost(): void {
    this.postsService.deletePost(this.post);
  }

}
