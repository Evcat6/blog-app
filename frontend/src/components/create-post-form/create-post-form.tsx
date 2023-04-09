import { ChangeEvent, FormEvent } from 'react';

import { DEFAULT_POST_CREATE_FORM } from '../../common/constants/constants';
import { useAppDispatch, useState } from '../../hooks/hooks';
import { notificationService } from '../../services/services';
import { postsActions } from '../../store/actions';
import styles from './styles.module.css';

const CreatePostForm: React.FC = () => {
    const [form, setForm] = useState(DEFAULT_POST_CREATE_FORM);
    const dispatch = useAppDispatch();

    const updateFrom = (
        event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ): void => {
        const { name, value } = event.target;
        setForm({ ...form, [name]: value });
    };

    const onSubmit = (event: FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        const { title, content } = form;
        if (!title || !content)
            return notificationService.warn('please fill all fields');
        void dispatch(postsActions.createPost(form));

        setForm(DEFAULT_POST_CREATE_FORM);
    };
    return (
        <form onSubmit={onSubmit} className={styles.container}>
            <label>title</label>
            <input
                onChange={updateFrom}
                value={form.title}
                type="text"
                name="title"
            />
            <label>description</label>
            <textarea
                onChange={updateFrom}
                value={form.content}
                name="content"
            />
            <button type="submit">Create Post</button>
        </form>
    );
};

export { CreatePostForm };
