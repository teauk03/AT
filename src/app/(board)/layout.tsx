import React from 'react';
import GlobalNavbarComponent from "@/components/UI/NavbarGlobal/GlobalNavbarComponent";
import FooterClientComponent from "@/components/UI/Footer/Footer";

const ForumLayout = ({children}: { children: React.ReactNode }) => {
    return (
        <>
            <GlobalNavbarComponent/>
            {children}
            <FooterClientComponent/>
        </>
    );
};

export default ForumLayout;