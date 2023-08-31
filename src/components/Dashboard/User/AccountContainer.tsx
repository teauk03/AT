'use client'
import axios from 'axios';
import React, {useCallback, useState} from "react";
import styles from "@/components/Dashboard/User/Account.module.scss";
import toCamelCase from '@/utils/stringUtils';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheck, faPen, faXmark} from "@fortawesome/free-solid-svg-icons";
import {AccountDetail, UserDataProps} from "@/types/Account";
import {useSession} from "next-auth/react";


/* [Component] 사용자 계정 세부 정보를 관리하는 컴포넌트입니다.
 * user : 사용자 정보
 * accountDetails : 사용자 계정 세부 정보  */
const AccountContainer = ({ user, accountData }: UserDataProps): JSX.Element => {
    const { data: session } = useSession();

    const handleError = useCallback((error: Error) => {
        console.error("An error occurred:", error);
    }, []);

    /* 활성화된 <input> 요소의 id를 추적하는 State */
    const [editActiveId, setEditActiveId] = useState<number | null>(null);

    /* 주어진 필드에 해당하는 사용자 정보를 찾아 문자열로 반환 */
    const getFieldValue = (field: string): string => {
        const formattedField = toCamelCase(field);
        const userField = user[formattedField];
        return userField ? userField.toString() : '-';
    }

    /* 계정 세부 정보 업데이트에 대한 상태를 추가 */
    const [updatedAccountDetails, setUpdatedAccountDetails] = useState<AccountDetail[]>(() => {
        /* accountDetails 배열을 순회하며 라벨 - 값 쌍을 생성 */
        const labelMap: Record<string, string> = accountData.reduce((map, detail) => ({
            ...map, [detail.label]: getFieldValue(detail.label)
        }), {});

        /* accountDetails 배열을 순회하며 각 detail값을 labelMap에서 찾아 업데이트 */
        return accountData.filter(detail => labelMap[detail.label] !== '-') // 값이 '-'인 경우 필터링
                .map(detail => ({
                ...detail, value: labelMap[detail.label] ?? '-',
            }));
    });

    /* 사용자의 입력을 처리후 상태 업데이트 */
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
        const {value} = e.target;
        setUpdatedAccountDetails(prevDetails => {
            const newDetails = [...prevDetails];
            newDetails[index].value = value;
            return newDetails;
        });
    }
    
    /* 사용자 정보를 업데이트하고 결과 반환 및 서버로 전송 */
    const handleInfoSaveClick = async (detail: AccountDetail, index: number) => {
        try {
            const response = await axios.post(
                `/api/setting/${user._id}`,
                { [detail.label.toLowerCase()]: updatedAccountDetails[index].value }
            );

            if (response.status === 200) {
                alert('정보가 업데이트 되었습니다.');
                setEditActiveId(null);
            } else {
                console.error("Failed to update user information");
                alert('정보 업데이트에 실패했습니다.');
            }
        } catch (error) {
            handleError(error as Error);
        }
    };



    /* 렌더링 */
    return (
        <>
            <div className={styles['section-user-info']}>
                {updatedAccountDetails.map((detail, index) => (
                    <div className={styles['account-item']} key={index}>
                        <h2 className={styles['account-item-name']}>{detail.title}</h2>
                        {detail.type === 'text' ? (
                            <>
                                <input
                                    className={styles.input}
                                    type="text"
                                    name={detail.label.toLowerCase()}
                                    value={detail.value}
                                    onChange={e => handleInputChange(e, index)}
                                    disabled={index !== editActiveId}
                                />
                            </>
                        ) : (
                            <p className={styles.count}>{detail.value}</p>
                        )}

                        {detail.type === 'text' ? (
                            <>
                                {editActiveId === index ? ( // index를 사용하여 조건 처리
                                    <div className={styles['save-wrapper']}>
                                        <button className={`${styles['edit-btn']} ${styles['exit-btn']}`} onClick={() => setEditActiveId(null)}>
                                            <FontAwesomeIcon icon={faXmark}/>
                                        </button>
                                        <button className={`${styles['edit-btn']} ${styles['check-btn']}`} type={"submit"} onClick={() => handleInfoSaveClick(detail, index)}>
                                            <FontAwesomeIcon icon={faCheck}/>
                                        </button>
                                    </div>
                                ) : (
                                    <div className={styles['edit-wrapper']}>
                                        <div className={`${styles['edit-btn']} ${styles['pen-btn']}`} onClick={() => {setEditActiveId(index);}}>
                                            <FontAwesomeIcon icon={faPen}/>
                                        </div>
                                    </div>
                                )}
                            </>
                        ) : null}
                    </div>
                ))}
            </div>
        </>
    )
}

export default AccountContainer;