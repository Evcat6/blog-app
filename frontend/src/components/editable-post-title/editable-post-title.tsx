import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ChangeEvent } from 'react';

import { FaIcons } from '../../common/enums/fa-icons.enum';
import { useEffect, useState } from '../../hooks/hooks';
import styles from './styles.module.css';

type Properties = {
    text: string;
    onUpdate: (value: string) => void;
};

const EditablePostTitle: React.FC<Properties> = ({ onUpdate, text }) => {
    const [visible, setVisible] = useState(false);

    useEffect(() => setValue(text), [text]);

    const [value, setValue] = useState(text);

    const onEdit = (e: ChangeEvent<HTMLInputElement>): void => {
        setValue(e.target.value);
    };

    const onUpdateContent = (): void => {
        if (visible) {
            onUpdate(value);
        }
        setVisible(!visible);
    };

    const icon = !visible ? FaIcons.UPDATE : FaIcons.DONE;

    return (
        <div className={styles.container}>
            {visible ? (
                <input
                    value={value}
                    className={styles.input}
                    type="text"
                    onChange={onEdit}
                />
            ) : (
                <h1>{value}</h1>
            )}
            <FontAwesomeIcon onClick={onUpdateContent} icon={icon} />
        </div>
    );
};

export { EditablePostTitle };
