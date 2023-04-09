import { createReducer } from '@reduxjs/toolkit';

import { Comment, PostDetails } from '../../common/types/types';
import { createComment } from '../comment/actions';
import { fetchPostDetails } from './actions';

type State = {
    loading: boolean;
    post: PostDetails;
};

const initialState: State = {
    loading: false,
    post: {
        id: NaN,
        title: '',
        content: '',
        created_at: '',
        updated_at: '',
        comments: [],
    },
};

const reducer = createReducer(initialState, (builder) => {
    builder.addCase(fetchPostDetails.fulfilled, (state, action) => {
        state.post = action.payload;
        state.loading = false;
    });

    builder.addCase(fetchPostDetails.pending, (state) => {
        state.loading = true;
    });

    builder.addCase(createComment.fulfilled, (state, action) => {
        state.post.comments.push(action.payload as Comment);
    });
});

export { reducer };
