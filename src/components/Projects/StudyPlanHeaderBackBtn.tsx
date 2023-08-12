'use client'
import React from 'react';
import styles from "@/components/Projects/StudyHome.module.scss";
import SvgIconComponent from "@/components/SvgIconComponent";
import useNavigation from "@/hooks/useNavigationGoBack";

const StudyPlanHeaderBackBtn = () => {
    /* 뒤로가기 커스텀 훅 */
    const { handleGoBack } = useNavigation();
    
    return (
        <button className={styles['back-button']} onClick={handleGoBack}>
            <SvgIconComponent
                width={25} height={25}
                svgPath={'M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z'}
            />
        </button>
    );
};

export default StudyPlanHeaderBackBtn;