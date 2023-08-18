'use client'
import axios from 'axios';
import React, {useState} from "react";
import {getSession, signIn} from "next-auth/react";
import styles from "@/components/Dashboard/User/Account.module.scss";
import toCamelCase from '@/utils/stringUtils';
import useErrorHandler from "@/hooks/useErrorHandler";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheck, faPen, faXmark} from "@fortawesome/free-solid-svg-icons";
import {AccountDetail, UserDataProps} from "@/types/Account";


/* [Component] 사용자 계정 세부 정보를 관리하는 컴포넌트입니다.
 * user : 사용자 정보
 * accountDetails : 사용자 계정 세부 정보  */
const AccountContainer = ({ user, accountData }: UserDataProps): JSX.Element => {
    const {handleError} = useErrorHandler();

    /* 활성화된 <input> 요소의 id를 추적하는 State */
    const [editActiveId, setEditActiveId] = useState<number | null>(null);

    /* 주어진 필드에 해당하는 사용자 정보를 찾아 문자열로 반환 */
    const getFieldValue = (field: string): string => {
        const formattedField = toCamelCase(field);
        console.log('user:', user); // user 객체 확인
        console.log('formattedField:', formattedField);
        const userField = user[formattedField];
        return userField ? userField.toString() : '-';
    }

    /* 계정 세부 정보 업데이트에 대한 상태를 추가 */
    const [updatedAccountDetails, setUpdatedAccountDetails
    ] = useState<AccountDetail[]>(() => {
        /* accountDetails 배열을 순회하며 라벨 - 값 쌍을 생성 */
        const labelMap: Record<string, string> = accountData.reduce((map, detail) => ({
            ...map, [detail.label]: getFieldValue(detail.label)
        }), {});

        /* accountDetails 배열을 순회하며 각 detail값을 labelMap에서 찾아 업데이트 */
        return accountData
            .filter(detail => labelMap[detail.label] !== '-') // 값이 '-'인 경우 필터링
            .map(detail => ({
                ...detail, value: labelMap[detail.label] ?? '-',
            }));
    });

    /* 사용자 정보를 업데이트하고 결과 반환. */
    const updateUserInfo = async (detail: AccountDetail, index: number): Promise<boolean> => {
        try {
            // [PUT] 사용자 정보를 업데이트 요청 _id
            const response = await axios.put(
                `/api/user/setting/${user.name}`,
                {[detail.label.toLowerCase()]: updatedAccountDetails[index].value});
            return response.status === 200;

        } catch (error) {
            // 에러가 발생하면 에러를 핸들링하고 false 반환
            handleError(error as Error);
            return false;
        }
    }


    /* 사용자의 입력을 처리해 상태 업데이트 */
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
        const {value} = e.target;
        setUpdatedAccountDetails(prevDetails => {
            const newDetails = [...prevDetails];
            newDetails[index].value = value;
            return newDetails;
        });
    }


    /* 사용자 정보를 수정하고 서버로 전송 */
    const handleInfoSaveClick = async (detail: AccountDetail, index: number) => {
        /* updateUserInfo 함수의 동작에 따라 업데이트된 정보를 전송하거나 처리 */
        const isUpdated = await updateUserInfo(detail, index);
        if (isUpdated) {
            /* 업데이트가 성공하면 필요한 경우 세션 갱신 */
            setEditActiveId(null);
        } else {
            console.error("Failed to update user information");
        }
    };



    /* 렌더링 */
    return (
        <>
            {/* User Info */}
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