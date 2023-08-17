'use client'
import React, {useState} from 'react';
import styles from './MusicGameSlide.module.scss';
import CAROUSEL_GAME from '@/data/data-game-carousel.json';

const MusicGameSlide = () => {
    const [activeItem, setActiveItem] = useState<number | null>(null);
    const [current, setCurrent] = useState(0);

    const handleItemClick = (index: number) => {
        setActiveItem(index === activeItem ? null : index);
    }

    const SLIDE_WIDTH = 320; // 각 슬라이드의 너비 가정
    const SLIDE_MARGIN = 15; // 각 슬라이드의 마진 가정

    // 슬라이드 항목의 총 너비 계산
    const totalWidth = (SLIDE_WIDTH + SLIDE_MARGIN * 2) * CAROUSEL_GAME.ITEMS.length;

    // 현재 슬라이드에 따른 translate 값 계산
    const translateValue = -(SLIDE_WIDTH + SLIDE_MARGIN * 2) * current;

    // 배열 유효성을 검사
    if (!Array.isArray(CAROUSEL_GAME.ITEMS) || CAROUSEL_GAME.ITEMS.length <= 0) return null;


    return (
        <>
            <section className={styles.section}>
                <h2 className={styles['line-title']}>popular games</h2>
                <div className={styles['carousel-container']}>
                    <div
                        className={styles['carousel-wrapper']}
                        style={{
                            transform: `translate3d(${translateValue}px, 0, 0)`,
                            width: `${totalWidth}px`,
                            transition: `all .4s ease-in-out 0s`,
                    }}
                    >
                        {/* Carousel Item */}
                        {CAROUSEL_GAME.ITEMS.map((game, index) => (
                            <div key={index}
                                 className={`${styles.item} ${activeItem === index ? styles.active : ''}`}
                                 style={{backgroundImage: `url(${game.image})`}}
                                 onClick={() => handleItemClick(index)}
                            >
                                <div className={styles['item-desc']}>
                                    <h3 className={styles['item-title']}>{game.title}</h3>
                                    <p className={styles['main-text']}>{game.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                {/* Carousel Button */}
                <div className={styles['slide-dots']}>
                    {CAROUSEL_GAME.ITEMS.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrent(index)}
                            className={styles['slide-btn']}
                        >
                            {current === index
                                ? <span className={styles['dot-active']}></span>
                                : <span className={styles['dot-passive']}></span>}
                        </button>
                    ))}
                </div>
            </section>
        </>
    );
};

export default MusicGameSlide;