import React from 'react';
import styles from "@/components/User/Account.module.scss";
import AccountDetailInput from "@/components/User/AccountDetailInput";
import AccountDetailActionBtn from "@/components/User/AccountDetailActionBtn";
import {AccountDetailsProps} from '@/types/Account'

const AccountDetails: React.FC<AccountDetailsProps> = ({ updatedAccountDetails, handleInputChange, handleInfoSaveClick, setEditActiveId, editActiveId }) => {
    return (
        <div className={styles['section-info']}>
            {updatedAccountDetails.map((detail, index) => (
                <div className={styles.account} key={index}>
                    <h2 className={styles['info-name']}>{detail.label}</h2>
                    {/* type property 가 text 면 <input .../> 요소가 렌더링 */}
                    <AccountDetailInput
                        detail={detail}
                        index={index}
                        handleInputChange={handleInputChange}
                        editActiveId={editActiveId}
                    />

                    {/* type property가 'text'면 편집 상태 -> X-mark 및 Check 아이콘 노출 */}
                    <AccountDetailActionBtn
                        detail={detail}
                        index={index}
                        editActiveId={editActiveId}
                        handleInfoSaveClick={handleInfoSaveClick}
                        setEditActiveId={setEditActiveId}
                    />
                </div>
            ))}
        </div>
    );
};

export default AccountDetails;