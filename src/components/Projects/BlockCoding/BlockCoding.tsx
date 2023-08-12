/* 파일 안에 자바스크립트 이벤트 기능을 넣기위하여 CSR 활용 */
'use client'
import React from 'react';
import styles from './block.module.scss';
import {DATA_BLOCK_ITEMS, DATA_BUTTON_ITEMS} from "@/data/dataProjectsItem";


/* 오른쪽 영역 클릭 이벤트 */
const BlockCodingContainer = () => {
    const RightButtonClick = (label: string) => {
        switch (label) {
            case "실행":
                alert('실행중..');
                break;
            case "장비추가":
                alert('추가할 장비를 선택해주세요.');
                break;
            case "장비삭제":
                alert('삭제할 장비를 두번 클릭해주세요.');
                break;
            case "저장":
                alert('저장 되었습니다.');
                break;
            default:
                break;
        }
    };

    return (
        <main className={styles.container}>
            {/* Left */}
            <section className={styles['section-left']}>
                <div className={styles['left-wrapper']}>
                    {DATA_BLOCK_ITEMS.map((item, index) => (
                        <button key={index} className={`${styles['left-button']} ${styles[`Button-${item.color}`]}`}>
                            <span>{item.name}</span>
                        </button>
                    ))}
                </div>
            </section>

            {/* Right */}
            <section className={styles['section-right']}>
                <div className={styles['right-wrapper']}>
                    {DATA_BUTTON_ITEMS.map((item, index) => (
                        <button key={index} className={`${styles.item} ${styles[`${item.className}`]}`} onClick={() => RightButtonClick(item.label)}>
                            {item.label}
                        </button>
                    ))}
                </div>
            </section>
        </main>
    )
}

export default BlockCodingContainer;