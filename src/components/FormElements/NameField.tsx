import { FC, ChangeEvent } from 'react';
import styles from '@/components/Auth/Join.module.scss';

interface NameFieldProps {
    name: string;
    handleNameChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const NameField: FC<NameFieldProps> = ({ name, handleNameChange }) => (
    <fieldset className={styles['form-fieldset']}>
        <label htmlFor="nameForm" className={styles['input-label']}>
            Name
            <div className={styles['input-item']}>
                <input
                    className={styles['input-box']}
                    type="text" name="userName"
                    placeholder='이름'
                    value={name}
                    onChange={handleNameChange}
                />
            </div>
        </label>
    </fieldset>
);

export {NameField};