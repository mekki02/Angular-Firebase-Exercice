import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { PostsActionsTypes } from './post.actions';
import * as postsActions from './post.actions';
import { mergeMap, map, catchError, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { Post } from '../post-list/post.model';
import { AngularFireDatabase } from '@angular/fire/database';
import { Router } from '@angular/router';

@Injectable()
export class PostsEffects {
    constructor(private actions$: Actions, private db: AngularFireDatabase, private router: Router) {}

    @Effect()
    fetchPosts$ = this.actions$.pipe(
        ofType(PostsActionsTypes.FETCH_POSTS),
        switchMap((action: postsActions.FetchPosts) => {
            return this.db.list('posts').snapshotChanges().pipe(
                map( posts => {
                    let postArray = []
                    posts.forEach(post => {
                        postArray.push({_id: post.payload.key, ...post.payload.val() })
                    })
                    return new postsActions.FetchPostsSuccess({posts: postArray});
                }),
                catchError(err => {
                    console.log(err)
                    return of({
                        type: postsActions.PostsActionsTypes.FETCH_POSTS_ERROR,
                        payload: {error: err}
                    });
                })
            );
        })
    );

    @Effect({dispatch: false})
    savePost$ = this.actions$.pipe(
        ofType(PostsActionsTypes.SAVE_POST),
        mergeMap((action: postsActions.SavePost) => {
            this.router.navigateByUrl('/posts');
            return this.db.list('posts').push(action.payload.post);
        })
    );

    @Effect()
    updatePost$ = this.actions$.pipe(
        ofType(postsActions.PostsActionsTypes.UPDATE_POST),
        switchMap((action: postsActions.UpdatePost) => {
            action.payload.newValues.loveIts = (action.payload.newValues.loveIts === -1 ) ? 0 : action.payload.newValues.loveIts;
            return this.db.object(`posts/${action.payload.post._id}`).update(action.payload.newValues)
            .then(value => {
                const newPost: Post = action.payload.post;
                newPost.loveIts = (action.payload.newValues.loveIts === -1 ) ? 0 : action.payload.newValues.loveIts;
                return new postsActions.UpdatePostSuccess({post: newPost})
            }).catch(() => {return new postsActions.UpdatePostError({error: "Error on update"})})
        })
    );

    @Effect({dispatch: false})
    deletePost$ = this.actions$.pipe(
        ofType(postsActions.PostsActionsTypes.DELETE_POST),
        switchMap((action: postsActions.DeletePost) => {
            return this.db.object(`posts/${action.payload._id}`).remove();
        })
    );
}