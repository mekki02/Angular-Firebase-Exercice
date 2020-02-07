import { Action } from '@ngrx/store';
import { Post } from '../post-list/post.model';

export enum PostsActionsTypes {
    FETCH_POSTS = '[Posts] Fetch POSTS',
    FETCH_POSTS_SUCCESS = '[Posts] Fetch POSTS Success',
    FETCH_POSTS_ERROR = '[Posts] Fetch POSTS Error',
    SAVE_POST = '[Posts] Save POST',
    SAVE_POST_SUCCESS = '[Posts] Save POST Success',
    SAVE_POST_ERROR = '[Posts] Save POST Error',
    DELETE_POST = '[Posts] Delete POST',
    DELETE_POST_SUCESS = '[Posts] Delete POST Success',
    DELETE_POST_ERROR = '[Posts] Delete POST ERROR',
    UPDATE_POST = '[Posts] Update Post',
    UPDATE_POST_SUCCESS = '[Posts] Update Post Success',
    UPDATE_POST_ERROR = '[Posts] Update Post Error'
}

export class FetchPosts implements Action {
    readonly type = PostsActionsTypes.FETCH_POSTS;
    constructor(public payload: {}) { }
}

export class FetchPostsSuccess implements Action {
    readonly type = PostsActionsTypes.FETCH_POSTS_SUCCESS;
    constructor(public payload: { posts: Post[] }) { }
}

export class FetchPostsError implements Action {
    readonly type = PostsActionsTypes.FETCH_POSTS_ERROR;
    constructor(public payload: { error: string }) { }
}

export class SavePost implements Action {
    readonly type = PostsActionsTypes.SAVE_POST;
    constructor(public payload: {post: Post}) {}
}

export class SavePostSuccess implements Action {
    readonly type = PostsActionsTypes.SAVE_POST_SUCCESS;
    constructor(public payload: {post: Post}) {}
}

export class SavePostError implements Action {
    readonly type = PostsActionsTypes.SAVE_POST_ERROR;
    constructor(public payload: {error: string}) {}
}

export class DeletePost implements Action {
    readonly type = PostsActionsTypes.DELETE_POST;
    constructor(public payload: {_id: string}) {}
}

export class DeletepostSuccess implements Action {
    readonly type = PostsActionsTypes.DELETE_POST;
    constructor(public payload: {}) {}
}

export class DeletepostError implements Action {
    readonly type = PostsActionsTypes.DELETE_POST;
    constructor(public payload: {error: string}) {}
}

export class UpdatePost implements Action {
    readonly type = PostsActionsTypes.UPDATE_POST;
    constructor(public payload: {post: Post, newValues: {loveIts: number}}) {}
}

export class UpdatePostSuccess implements Action {
    readonly type = PostsActionsTypes.UPDATE_POST_SUCCESS;
    constructor(public payload: {post: Post}) {}
}

export class UpdatePostError implements Action {
    readonly type = PostsActionsTypes.UPDATE_POST_ERROR;
    constructor(public payload: {error: string}) {}
}

export type PostsActions = FetchPosts
    | FetchPostsSuccess
    | FetchPostsError
    | SavePost
    | SavePostSuccess
    | SavePostError;