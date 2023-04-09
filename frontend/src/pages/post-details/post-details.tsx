import { AddCommentForm, PostDetails } from '../../components/components';
import {
    useAppDispatch,
    useAppSelector,
    useEffect,
    useParams,
} from '../../hooks/hooks';
import { postDetailsActions } from '../../store/actions';
import styles from './styles.module.css';

const PostDetailsPage: React.FC = () => {
    const { id } = useParams();
    const dispatch = useAppDispatch();
    const { post, loading } = useAppSelector((state) => state.postDetails);
    useEffect(() => {
        void dispatch(postDetailsActions.fetchPostDetails(Number(id)));
    }, [dispatch, id]);
    return (
        <main>
            {!loading ? (
                <>
                    <PostDetails
                        title={post.title}
                        content={post.content}
                        comments={post.comments}
                        id={post.id}
                        created_at={post.created_at}
                    />
                    <div className={styles.add_comment_container}>
                        <AddCommentForm />
                    </div>
                </>
            ) : (
                <h1>Loading ...</h1>
            )}
        </main>
    );
};

export { PostDetailsPage };
