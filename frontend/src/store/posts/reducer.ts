import { createReducer } from '@reduxjs/toolkit';

import { Post } from '../../common/types/types';
import { createPost, deletePost, fetchPosts } from './actions';

type State = {
    loading: boolean;
    posts: Post[];
};

const initialState: State = {
    loading: false,
    posts: [],
};

const reducer = createReducer(initialState, (builder) => {
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
        state.posts = action.payload;
        state.loading = false;
    });

    builder.addCase(fetchPosts.pending, (state) => {
        state.loading = true;
    });

    builder.addCase(createPost.fulfilled, (state, action) => {
        state.posts.push(action.payload);
    });

    builder.addCase(deletePost.fulfilled, (state, action) => {
        const filteredPosts = state.posts.filter(
            (post) => post.id !== action.payload
        );
        state.posts = filteredPosts;
    });
});

export { reducer };
