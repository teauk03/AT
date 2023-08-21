import React from 'react';
import GlobalNavbarComponent from "@/components/UI/NavbarGlobal/GlobalNavbarComponent";
import FooterClientComponent from "@/components/UI/Footer/Footer";

const ReserveLayout = ({children}: { children: React.ReactNode }) => {
    return (
        <>
            <GlobalNavbarComponent/>
                {children}
            <FooterClientComponent/>
        </>
    );
};

export default ReserveLayout;