import React from "react";
import InquiryContainer from "@/components/Help/InquiryContainer";

const UserPasswordInquiryPage = (): JSX.Element => {
    return (
        <InquiryContainer
            inquiryDescription={'비밀번호를 초기화 합니다.'}
            btnDescription={'비밀번호 초기화'}
        />
    )
}


export default UserPasswordInquiryPage;