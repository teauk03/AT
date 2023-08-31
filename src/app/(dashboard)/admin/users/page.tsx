import React from 'react';
import checkAdminRole from "@/utils/User/checkAdminRole";
import getConnectServerDb from "@/utils/DB/getConnectServerDb";
import LoadingForum from "@/components/UI/Loading/LoadingForum";
import UserAccountContainer from "@/components/Dashboard/Admin/Contents/UserAccountManagement";

const UserAccountManagement = async () => {
    const adminCheckResult = await checkAdminRole();
    if (adminCheckResult) return adminCheckResult;

    /* DB 쿼리 */
    const {results} = await getConnectServerDb("main", "user_card", 10);
    if (!results) return <LoadingForum/>
    return <UserAccountContainer title={'UserAccount Management'} results={results}/>
};

export default UserAccountManagement;