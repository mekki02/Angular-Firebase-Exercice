import { createFeatureSelector, createSelector, props } from '@ngrx/store';
import { State } from './post.reducer';

export const selectPostsState = createFeatureSelector<State>('postsState');

export const selectPosts = createSelector(
    selectPostsState,
    (state: State) => state.posts
);

export const selectPostById = createSelector(
    selectPosts,
    (posts, props) => {
        posts.forEach(post => {
            if (post._id === props.id) return post
        })
    }
);