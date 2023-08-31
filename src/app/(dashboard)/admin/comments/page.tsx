import React from 'react';
import checkAdminRole from "@/utils/User/checkAdminRole";
import getConnectServerDb from "@/utils/DB/getConnectServerDb";
import CommentsContainer from "@/components/Dashboard/Admin/Contents/CommentsManagement";
import LoadingForum from "@/components/UI/Loading/LoadingForum";

const CommentsManagement = async () => {
    const adminCheckResult = await checkAdminRole();
    if (adminCheckResult) return adminCheckResult;

    /* DB 쿼리 */
    const {results} = await getConnectServerDb("main", "comment", 20);
    if (!results) return <LoadingForum/>
    return <CommentsContainer title={'Comments Management'} results={results}/>
};

export default CommentsManagement;