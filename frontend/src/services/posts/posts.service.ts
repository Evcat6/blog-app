import { ApiMethod, Endpoint } from '../../common/enums/enums';
import { callApi } from '../../common/helpers/helpers';
import {
    CreatePost,
    Post,
    PostDetails,
    UpdatePost,
} from '../../common/types/types';

class PostsService {
    public async getAllPosts(): Promise<Post[]> {
        return await callApi(Endpoint.POST);
    }
    public async createPost(post: CreatePost): Promise<Post> {
        return await callApi(Endpoint.POST, ApiMethod.POST, post);
    }

    public async getPostWithComments(id: number): Promise<PostDetails> {
        const endpoint = `${Endpoint.POST}/${id}`;
        return await callApi(endpoint);
    }

    public async deletePost(id: number): Promise<number> {
        const endpoint = `${Endpoint.POST}/${id}`;
        return await callApi(endpoint, ApiMethod.DELETE);
    }

    public async updatePost({ id, post }: UpdatePost): Promise<Post> {
        return await callApi(Endpoint.POST, ApiMethod.PUT, { id, post });
    }
}

export { PostsService };
