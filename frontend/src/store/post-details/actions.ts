import { createAsyncThunk } from '@reduxjs/toolkit';

import { PostDetails } from '../../common/types/types';
import { AsyncThunkConfig } from '../store';
import { ActionTypes } from './common';

const fetchPostDetails = createAsyncThunk<
    PostDetails,
    number,
    AsyncThunkConfig
>(
    ActionTypes.FETCH_POST_DETAILS,
    async (id: number, { extra: { services } }): Promise<PostDetails> => {
        const { posts } = services;
        return await posts.getPostWithComments(id);
    }
);

export { fetchPostDetails };
