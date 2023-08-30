import React from 'react';
import GlobalNavbar from "@/components/UI/Nav/GlobalNavbar";
import Footer from "@/components/UI/Footer/Footer";

const ReserveLayout = ({children}: { children: React.ReactNode }) => {
    return (
        <>
            <GlobalNavbar/>
                {children}
            <Footer/>
        </>
    );
};

export default ReserveLayout;