import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { FaIcons } from '../../common/enums/enums';
import { getDate } from '../../common/helpers/get-date.helper';
import { useAppDispatch, useNavigate } from '../../hooks/hooks';
import { postsActions } from '../../store/actions';
import { EditablePostDescription, EditablePostTitle } from '../components';
import styles from './styles.module.css';

type Properties = {
    id: number;
    title: string;
    content: string;
    created_at: string;
};

const PostItem: React.FC<Properties> = ({ id, title, content, created_at }) => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const onDeletePost = async (): Promise<void> => {
        await dispatch(postsActions.deletePost(id));
    };

    const postPath = `/post/${id}`;
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

    const onNavigate = (): void => {
        navigate(postPath);
    };
    return (
        <li className={styles.container}>
            <EditablePostTitle text={title} onUpdate={onUpdatePostTitle} />
            <EditablePostDescription
                text={content}
                onUpdate={onUpdatePostContent}
            />
            <p className={styles.create_at}>
                Created at: {getDate(created_at)}
            </p>
            <FontAwesomeIcon
                className={styles.redirect_icon}
                icon={FaIcons.REDIRECT}
                onClick={onNavigate}
            />
            <FontAwesomeIcon
                className={styles.trash_icon}
                icon={FaIcons.TRASH}
                onClick={onDeletePost}
            />
        </li>
    );
};

export { PostItem };
