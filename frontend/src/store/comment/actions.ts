import { createAsyncThunk } from '@reduxjs/toolkit';

import { Comment, CreateComment } from '../../common/types/types';
import { AsyncThunkConfig } from '../store';
import { ActionTypes } from './common';

const createComment = createAsyncThunk<
    Comment,
    CreateComment,
    AsyncThunkConfig
>(
    ActionTypes.CREATE_COMMENT,
    async (newComment, { extra: { services } }): Promise<Comment> => {
        const { comment: commentService, notification } = services;
        const comment = await commentService.createComment(newComment);

        notification.success('Comment created successfully');

        return comment;
    }
);

export { createComment };
