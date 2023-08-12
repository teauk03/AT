import React from 'react';
import styles from "@/components/User/Account.module.scss";
import {AccountDetailInputProps} from "@/types/Account";

const AccountDetailInput: React.FC<AccountDetailInputProps> = ({detail, index, handleInputChange, editActiveId}) => {
    /* detail.type 에 따라 입력 필드 또는 텍스트를 렌더링 */
    return (
        <>
            {
                detail.type === 'text' ? (
                    <input
                        className={styles.input}
                        type="text"
                        value={detail.value}
                        onChange={e => handleInputChange(e, index)}
                        disabled={detail.id !== editActiveId}
                    />
                    /* type property 가 text 가 아니라면 <p> 요소 렌더링 */
                ) : (
                    <p className={styles.count}>{detail.value}</p>
                )
            }
        </>
    );
};

export default AccountDetailInput;