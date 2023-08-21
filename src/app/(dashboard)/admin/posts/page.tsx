import React from 'react';
import checkAdminRole from "@/utils/User/checkAdminRole";
import getConnectServerDb from "@/utils/DB/getConnectServerDb";
import LoadingForum from "@/components/UI/Loading/LoadingForum";
import ForumContainer from "@/components/Dashboard/Admin/Contents/ForumManagement";

const AdminForumManagement =  async () => {
    const adminCheckResult = await checkAdminRole();
    if (adminCheckResult) return adminCheckResult;

    /* DB 쿼리 */
    const {results} = await getConnectServerDb("forum", "post", 5);
    if (!results) return <LoadingForum/>
    return <ForumContainer title={'Posts Management'} results={results}/>
};

export default AdminForumManagement;