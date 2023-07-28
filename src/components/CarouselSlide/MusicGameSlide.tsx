'use client'
import React, {useState} from 'react';
import styles from './MusicGameSlide.module.scss';
import games from '@/data/carouselItem';
import useCarouselSlide from '@/hooks/UI/useCarouselSlide';
import CarouselDotButton from "@/components/CarouselSlide/CarouselButton/CarouselDotButton";

const MusicGameSlide = () => {
    const { current, setCurrent } = useCarouselSlide();

    const [activeItem, setActiveItem] = useState<number | null>(null);

    const handleItemClick = (index: number) => {
        setActiveItem(index === activeItem ? null : index);
    }

    const SLIDE_WIDTH = 320; // 각 슬라이드의 너비 가정
    const SLIDE_MARGIN = 15; // 각 슬라이드의 마진 가정

    // 슬라이드 항목의 총 너비 계산
    const totalWidth = (SLIDE_WIDTH + SLIDE_MARGIN * 2) * games.length;

    // 현재 슬라이드에 따른 translate 값 계산
    const translateValue = -(SLIDE_WIDTH + SLIDE_MARGIN * 2) * current;
    console.log(current)

    // 배열 유효성을 검사
    if (!Array.isArray(games) || games.length <= 0) return null;


    return (
        <>
            <section className={styles.section}>
                <h2 className={styles['line-title']}>trending games</h2>
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
                        {games.map((game, index) => (
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
                <CarouselDotButton
                    current={current}
                    setCurrent={setCurrent}
                />
            </section>
        </>
    );
};

export default MusicGameSlide;