import { Post } from '../../common/types/post.type';
import { PostItem } from '../components';
import styles from './styles.module.css';

type Properties = {
    posts: Post[];
};

const PostsList: React.FC<Properties> = ({ posts }) => {
    return (
        <ul className={styles.container}>
            {posts.map((post) => (
                <PostItem
                    id={post.id}
                    key={post.id}
                    title={post.title}
                    content={post.content}
                    created_at={post.created_at}
                />
            ))}
        </ul>
    );
};

export { PostsList };
