import { Comment } from './types';

type PostDetails = {
    id: number;
    title: string;
    content: string;
    created_at: string;
    updated_at: string;
    comments: Comment[];
};

export { type PostDetails };
