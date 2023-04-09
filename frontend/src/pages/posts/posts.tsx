import { useEffect } from 'react';

import { CreatePostForm, PostsList } from '../../components/components';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { postsActions } from '../../store/actions';
import styles from './styles.module.css';

const Posts: React.FC = () => {
    const dispatch = useAppDispatch();
    const { posts } = useAppSelector((state) => state.posts);

    useEffect(() => {
        void dispatch(postsActions.fetchPosts());
    }, [dispatch]);

    return (
        <main>
            <div className={styles.create_post_container}>
                <CreatePostForm />
            </div>
            <div className={styles.posts_container}>
                {posts.length !== 0 ? (
                    <PostsList posts={posts} />
                ) : (
                    <h1>No posts</h1>
                )}
            </div>
        </main>
    );
};

export { Posts };
