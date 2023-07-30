import {ChangeEvent, FC} from 'react';
import styles from '@/components/Auth/Join.module.scss';

interface EmailFieldProps {
    email: string;
    emailValid: boolean;
    handleEmailChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const EmailField: FC<EmailFieldProps> = ({email, emailValid, handleEmailChange}) => (
    <fieldset className={styles['form-fieldset']}>
        <label htmlFor="emailForm" className={styles['input-label']}>
            Email
            <div className={styles['input-item']}>
                <input
                    className={styles['input-box']}
                    type="email"
                    name="email"
                    placeholder='이메일(Email)'
                    autoComplete="current-email"
                    value={email}
                    onChange={handleEmailChange}
                />
                {
                    email && (
                        <div className={emailValid ? styles.valid : styles.invalid}>
                            {emailValid ? "사용 가능한 이메일입니다." : "사용할 수 없는 이메일입니다."}
                        </div>
                    )
                }
            </div>
        </label>
    </fieldset>
);

export {EmailField};