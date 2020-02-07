import { Injectable } from '@angular/core';
import { Post } from './post.model';
import { Store } from '@ngrx/store';
import { AppState } from '../utils/reducers';
import { FetchPosts, SavePost, UpdatePost, DeletePost } from '../store/post.actions';

@Injectable({
    providedIn: 'root'
})
export class PostListService {

    constructor(private store: Store<AppState>) {}

    getPosts() {
        this.store.dispatch(new FetchPosts({}));
    }

    addPost(post: Post) {
        this.store.dispatch(new SavePost({post}));
    }

    updatePost(post: Post, newValues): void {
        this.store.dispatch(new UpdatePost({post, newValues}));
    }

    deletePost(post: Post): void {
        this.store.dispatch(new DeletePost({_id: post._id}));
    }
}