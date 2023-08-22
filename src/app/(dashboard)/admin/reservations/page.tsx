import React from 'react';
import checkAdminRole from "@/utils/User/checkAdminRole";
import ReservationContainer from "@/components/Dashboard/Admin/Contents/ReservationManagement";
import getConnectServerDb from "@/utils/DB/getConnectServerDb";
import LoadingForum from "@/components/UI/Loading/LoadingForum";

const AdminReservationManagement = async () => {
    const adminCheckResult = await checkAdminRole();
    if (adminCheckResult) return adminCheckResult;

    /* DB 쿼리 */
    const {results} = await getConnectServerDb("reservation", "reservation_list", 25);
    if(!results) return <LoadingForum/>
    return <ReservationContainer title={'Reservation Management'} results={results}/>
};

export default AdminReservationManagement;