import { Post } from '../post-list/post.model';
import { PostsActions, PostsActionsTypes } from './post.actions';

export interface State {
    posts: Post[]
}

const initialState: State = {
    posts: []
};

export function reducer(state = initialState, action: PostsActions) {
    switch(action.type) {
        case PostsActionsTypes.FETCH_POSTS_SUCCESS : {
            return {
                posts: action.payload.posts
            }
        }
        default: {
            return state
        }
    }
}