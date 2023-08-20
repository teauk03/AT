import React from 'react';
import ForumGridContainer from "@/components/Dashboard/Admin/ManagementGrid";
import checkAdminRole from "@/utils/User/checkAdminRole";

const AdminReservationManagement = async () => {
    const adminCheckResult = await checkAdminRole();
    if (adminCheckResult) return adminCheckResult;
    return <ForumGridContainer title={'Reservation Management'}/>
};

export default AdminReservationManagement;