import React from 'react';
import styles from './Account.module.scss';
import {AccountDetailActionsProps} from '@/types/Account'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPen, faCheck, faXmark} from "@fortawesome/free-solid-svg-icons";


/* [Component] 계정 세부 정보의 편집 버튼을 관리하는 컴포넌트입니다.
 * detail - 현재 표시하려는 계정 세부 정보
 * index - 현재 표시하려는 계정 세부 정보의 인덱스
 * editActiveId - 현재 편집 중인 세부 항목의 id
 * handleInfoSaveClick - 사용자 정보를 수정하고 서버로 전송하는 함수 */
const AccountDetailActionBtn: React.FC<AccountDetailActionsProps> = ({ detail, index, editActiveId, handleInfoSaveClick, setEditActiveId }) => {
    return detail.type === 'text' ? (
        <>
            {editActiveId === detail.id ? (
                /* 편집 상태 -> X-mark 및 Check 아이콘 노출 */
                <div className={styles['save-wrapper']}>
                    <button
                        className={`${styles['edit-btn']} ${styles['exit-btn']}`}
                        onClick={() => setEditActiveId(null)}
                    >
                        <FontAwesomeIcon icon={faXmark}/>
                    </button>
                    <button
                        className={`${styles['edit-btn']} ${styles['check-btn']}`}
                        onClick={() => handleInfoSaveClick(detail, index)}
                    >
                        <FontAwesomeIcon icon={faCheck}/>
                    </button>
                </div>
            ) : (
                /* 아이콘 노출, 편집 중일 때는 비활성화 */
                <div className={styles['edit-wrapper']}>
                    <button className={styles['edit-btn']} onClick={() => setEditActiveId(detail.id)}>
                        <FontAwesomeIcon icon={faPen}/>
                    </button>
                </div>
            )}
        </>
    ) : null;
};

export default AccountDetailActionBtn;