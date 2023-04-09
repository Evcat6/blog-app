import { ApiMethod, Endpoint } from '../../common/enums/enums';
import { callApi } from '../../common/helpers/helpers';
import { Comment, CreateComment } from '../../common/types/types';

class CommentService {
    public async createComment(comment: CreateComment): Promise<Comment> {
        return await callApi(Endpoint.COMMENT, ApiMethod.POST, comment);
    }
}

export { CommentService };
