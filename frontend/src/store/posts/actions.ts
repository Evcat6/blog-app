import { createAsyncThunk } from '@reduxjs/toolkit';

import { CreatePost, Post, UpdatePost } from '../../common/types/types';
import { AsyncThunkConfig } from '../store';
import { ActionTypes } from './common';

const fetchPosts = createAsyncThunk<Post[], void, AsyncThunkConfig>(
    ActionTypes.FETCH_POSTS,
    async (_, { extra: { services } }): Promise<Post[]> => {
        const { posts } = services;
        return await posts.getAllPosts();
    }
);

const createPost = createAsyncThunk<Post, CreatePost, AsyncThunkConfig>(
    ActionTypes.CREATE_POST,
    async (post, { extra: { services } }): Promise<Post> => {
        const { posts, notification } = services;
        const newPost = await posts.createPost(post);
        notification.success('new post created successfully!');
        return newPost;
    }
);

const deletePost = createAsyncThunk<number, number, AsyncThunkConfig>(
    ActionTypes.DELETE_POST,
    async (id, { extra: { services } }): Promise<number> => {
        const { posts, notification } = services;
        const postId = await posts.deletePost(id);
        notification.success('post deleted successfully!');
        return postId;
    }
);

const updatePost = createAsyncThunk<Post, UpdatePost, AsyncThunkConfig>(
    ActionTypes.UPDATE_POST,
    async (payload, { extra: { services } }): Promise<Post> => {
        const { posts, notification } = services;
        const updatedPost = await posts.updatePost(payload);
        notification.success('post updated successfully!');
        return updatedPost;
    }
);

export { fetchPosts, createPost, deletePost, updatePost };
