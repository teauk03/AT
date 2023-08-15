import React from 'react';
import OverviewAsideSection from "@/components/Reserve/Overview/OverviewAsideSection";
import OverviewMainSection from "@/components/Reserve/Overview/OverviewMainSection";

const OverviewContainer = () => {
    return (
        <>
            {/* [Left Section] 상세페이지 Aside */}
            <OverviewAsideSection/>

            {/* [Right Section] 상세페이지 섹션 */}
            <OverviewMainSection/>
        </>
    );
};

export default OverviewContainer;