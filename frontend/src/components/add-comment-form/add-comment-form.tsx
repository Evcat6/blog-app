import { useAppDispatch, useParams, useState } from '../../hooks/hooks';
import { notificationService } from '../../services/services';
import { commentActions } from '../../store/actions';
import styles from './styles.module.css';

const AddCommentForm: React.FC = () => {
    const [comment, setComment] = useState('');
    const dispatch = useAppDispatch();
    const { id } = useParams();

    const updateCommentInput = (
        event: React.ChangeEvent<HTMLInputElement>
    ): void => {
        const { value } = event.target;
        setComment(value);
    };

    const onAddComment = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault();

        if (!comment) return notificationService.warn('Please type Something!');
        dispatch(
            commentActions.createComment({
                postId: Number(id),
                content: comment,
            })
        );
        setComment('');
    };
    return (
        <form onSubmit={onAddComment} className={styles.container}>
            <input value={comment} onChange={updateCommentInput} type="text" />
            <button type="submit">Add Comment</button>
        </form>
    );
};

export { AddCommentForm };
