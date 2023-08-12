'use client'
import axios from 'axios';
import React, {useState} from "react";
import toCamelCase from '@/utils/stringUtils';
import useErrorHandler from "@/hooks/useErrorHandler";

import {AccountDetail, UserDataProps} from "@/types/Account";
import UserImage from "@/components/User/UserImage";
import AccountDetails from "@/components/User/AccountDetails";


/* [Component] 사용자 계정 세부 정보를 관리하는 컴포넌트입니다.
 * user - 사용자 정보
 * accountDetails - 사용자 계정 세부 정보  */
const AccountContainer = ({user, accountDetails}: UserDataProps): JSX.Element => {
    const {handleError} = useErrorHandler();

    /* 활성화된 <input> 요소의 id를 추적하는 State */
    const [
        editActiveId,
        setEditActiveId
    ] = useState<number | null>(null);


    /* 주어진 필드에 해당하는 사용자 정보를 찾아 문자열로 반환 */
    const getFieldValue = (field: string): string => {
        const formattedField = toCamelCase(field);
        const userField = user[formattedField];
        return userField ? userField.toString() : '-';
    }


    /* 계정 세부 정보 업데이트에 대한 상태를 추가 */
    const [
        updatedAccountDetails,
        setUpdatedAccountDetails
    ] = useState<AccountDetail[]>(() => {
        /* accountDetails 배열을 순회하며 라벨 - 값 쌍을 생성 */
        const labelMap: Record<string, string> = accountDetails.reduce((map, detail) => ({
            ...map, [detail.label]: getFieldValue(detail.label)
        }), {});

        /* accountDetails 배열을 순회하며 각 detail값을 labelMap에서 찾아 업데이트 */
        return accountDetails.map(detail => ({
            ...detail, value: labelMap[detail.label] ?? '-',
        }));
    });


    /**
     * 사용자 정보를 업데이트하고 결과 반환.
     * @param detail - 업데이트를 원하는 계정 정보 항목에 대한 정보를 가진 객체
     * @param index - 업데이트를 원하는 계정 정보 항목의 인덱스
     * @return 성공적으로 업데이트하면 true, 그렇지 않으면 false 반환
     */
    const updateUserInfo = async (
        detail: AccountDetail,
        index: number
    ): Promise<boolean> => {
        try {
            // [PUT] 사용자 정보를 업데이트 요청
            const response = await axios.put(
                `/api/user/${user._id}`,
                {[detail.label.toLowerCase()]: updatedAccountDetails[index].value});

            // 요청성공 -> true
            return response.status === 200;

        } catch (error) {
            // 에러가 발생하면 에러를 핸들링하고 false 반환
            handleError(error as Error);
            return false;
        }
    }


    /* 사용자의 입력을 처리해 상태 업데이트 */
    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement>,
        index: number) => {
        const {value} = e.target;
        setUpdatedAccountDetails(prevDetails => {
            const newDetails = [...prevDetails];
            newDetails[index].value = value;
            return newDetails;
        });
    }


    /* 사용자 정보를 수정하고 서버로 전송 */
    const handleInfoSaveClick = async (
        detail: AccountDetail,
        index: number
    ) => {
        const isUpdated = await updateUserInfo(detail, index);
        if (isUpdated) setEditActiveId(null);
        else console.error("Failed to update user information");
    }


    /* 렌더링 */
    return (
        <>
            {/* User Title */}
            <UserImage
                user={user}
                accountDetails={accountDetails}
            />

            {/* User Info */}
            <AccountDetails
                updatedAccountDetails={updatedAccountDetails}
                handleInputChange={handleInputChange}
                handleInfoSaveClick={handleInfoSaveClick}
                setEditActiveId={setEditActiveId}
                editActiveId={editActiveId}
            />
        </>
    )
}

export default AccountContainer;