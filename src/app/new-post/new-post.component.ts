import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Post } from '../post-list/post.model';
import { PostListService } from '../post-list/post-list.service';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit {

  public newPostForm: FormGroup; 

  constructor(private fb: FormBuilder, private postsService: PostListService) { }

  ngOnInit() {
    this.newPostForm = this.fb.group({
      title: new FormControl(null, Validators.required),
      content: new FormControl(null, Validators.required)
    })
  }

  submitPost(): void {
    const newDate = new Date();
    const post: Post = {
      title: this.newPostForm.get('title').value,
      content: this.newPostForm.get('content').value,
      loveIts: 0,
      creationDate: newDate.toString()
    }
    this.postsService.addPost(post);
  }

}
