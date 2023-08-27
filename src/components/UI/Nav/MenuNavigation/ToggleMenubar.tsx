'use client'
import React, {useState} from 'react';
import styles from "./ToggleMenubar.module.scss";

type DynamicAccount = {
    label: string;
}

type MenuNavbarProps = {
    props: DynamicAccount[];
}

const ToggleMenubar = ({props}: MenuNavbarProps) => {
    /* 버튼 토글 상태 */
    const length = props?.length ?? 0;  // props가 정의되지 않았을 경우 대비해 기본값을 설정
    const initialActiveState = new Array(length).fill(false);
    initialActiveState[0] = true;
    const [activeButton, setActiveButton] = useState<boolean[]>(initialActiveState);

    const handleButtonToggle = (index: number) => {
        const newActiveButton = activeButton.map((_, i) => i === index);
        setActiveButton(newActiveButton);
    }

    /* 클라이언트 컴포넌트 렌더링 */
    return (
        <div className={styles.timelineMenu}>
            {props?.map((item, index) => (
                <button key={index} className={activeButton[index] ? styles['active-btn'] : styles.timelineItem} onClick={() => handleButtonToggle(index)}>
                    {item.label}
                </button>
            ))}
        </div>
    );
};

export default ToggleMenubar;