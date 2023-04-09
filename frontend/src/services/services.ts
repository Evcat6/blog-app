import { toast } from 'react-toastify';

import { CommentService } from './comment/comment.service';
import { NotificationService } from './notification/notification.service';
import { PostsService } from './posts/posts.service';

const postsService = new PostsService();
const commentService = new CommentService();
const notificationService = new NotificationService(toast);

export { postsService, commentService, notificationService };
