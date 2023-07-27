import {ChangeEvent, FC} from 'react';
import styles from '@/components/Auth/Join.module.scss';

interface PasswordFieldProps {
    password: string;
    passwordValid: boolean;
    handlePasswordChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const PasswordField: FC<PasswordFieldProps> = ({password, passwordValid, handlePasswordChange}) => (
    <fieldset className={styles['form-fieldset']}>
        <label htmlFor="passwordForm" className={styles['input-label']}>
            Password
            <div className={styles['input-item']}>
                <input
                    className={styles['input-box']}
                    type="password"
                    name="password"
                    placeholder='비밀번호'
                    autoComplete="current-password"
                    value={password}
                    onChange={handlePasswordChange}
                />
                {
                    password && (
                        <div className={passwordValid ? styles.valid : styles.invalid}>
                            {passwordValid ? "사용 가능한 비밀번호입니다." : "사용할 수 없는 비밀번호입니다."}
                        </div>
                    )
                }
            </div>
        </label>
    </fieldset>
);

export {PasswordField};