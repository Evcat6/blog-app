import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';

import { AppRoute, FaIcons } from '../../common/enums/enums';
import { getDate } from '../../common/helpers/get-date.helper';
import { Comment } from '../../common/types/types';
import { useAppDispatch } from '../../hooks/app-dispatch.hook';
import { postsActions } from '../../store/actions';
import { EditablePostDescription, EditablePostTitle } from '../components';
import styles from './styles.module.css';

type Properties = {
    id: number;
    title: string;
    content: string;
    comments: Comment[];
    created_at: string;
};

const PostDetails: React.FC<Properties> = ({
    title,
    content,
    comments,
    id,
    created_at,
}) => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const onDeletePost = async (): Promise<void> => {
        await dispatch(postsActions.deletePost(id));
        navigate(AppRoute.ROOT);
    };

    const onUpdatePostContent = async (value: string): Promise<void> => {
        if (value !== content) {
            await dispatch(
                postsActions.updatePost({ id, post: { content: value } })
            );
        }
    };
    const onUpdatePostTitle = async (value: string): Promise<void> => {
        if (value !== title) {
            await dispatch(
                postsActions.updatePost({ id, post: { title: value } })
            );
        }
    };
    return (
        <div className={styles.container}>
            <div className={styles.post_details_container}>
                <EditablePostTitle text={title} onUpdate={onUpdatePostTitle} />
                <EditablePostDescription
                    text={content}
                    onUpdate={onUpdatePostContent}
                />
                <p>Created at: {getDate(created_at)}</p>
                <FontAwesomeIcon
                    className={styles.trash_icon}
                    icon={FaIcons.TRASH}
                    onClick={onDeletePost}
                />
            </div>
            <h2>Comments</h2>
            <div>
                <ul>
                    {comments.map((comment) => (
                        <li key={comment.id}>{comment.content}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export { PostDetails };
