import React from 'react';
import ForumGridContainer from "@/components/Dashboard/Admin/ManagementGrid";
import checkAdminRole from "@/utils/User/checkAdminRole";

const AdminForumManagement =  async () => {
    const adminCheckResult = await checkAdminRole();
    if (adminCheckResult) return adminCheckResult;
    return <ForumGridContainer title={'Posts Management'}/>
};

export default AdminForumManagement;