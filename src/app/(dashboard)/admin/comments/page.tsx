import React from 'react';
import ForumGridContainer from "@/components/Dashboard/Admin/ManagementGrid";
import checkAdminRole from "@/utils/User/checkAdminRole";

const CommentsManagement = async () => {
    const adminCheckResult = await checkAdminRole();
    if (adminCheckResult) return adminCheckResult;
    return <ForumGridContainer title={'Comments Management'}/>
};

export default CommentsManagement;