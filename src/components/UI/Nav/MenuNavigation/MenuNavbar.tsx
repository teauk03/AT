'use client'
import React, {useState} from 'react';
import styles from "@/components/Dashboard/User/MyPage/MyPage.module.scss";

type DynamicAccount = {
    label: string;
}

type MenuNavbarProps = {
    props: DynamicAccount[];
}

const MenuNavbar = ({props}: MenuNavbarProps) => {
    /* 버튼 토글 상태 */
    const initialActiveState = new Array(props.length).fill(false);
    initialActiveState[0] = true;
    const [activeButton, setActiveButton] = useState<boolean[]>(initialActiveState);

    const handleButtonToggle = (index: number) => {
        const newActiveButton = activeButton.map((_, i) => i === index);
        setActiveButton(newActiveButton);
    }

    /* 클라이언트 컴포넌트 렌더링 */
    return (
        <div className={styles['timeline-menu']}>
            {props.map((item, index) => (
                <button key={index} className={activeButton[index] ? styles['active-btn'] : styles['timeline-item']} onClick={() => handleButtonToggle(index)}>
                    {item.label}
                </button>
            ))}
        </div>
    );
};

export default MenuNavbar;