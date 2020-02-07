import { ActionReducerMap } from '@ngrx/store';
import { reducer } from '../store/post.reducer';

export interface AppState {}

export const reducers: ActionReducerMap<AppState> = {
    postsState: reducer
}

