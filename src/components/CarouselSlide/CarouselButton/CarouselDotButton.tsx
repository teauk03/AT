'use client'
import React from 'react';
import styles from "@/components/CarouselSlide/MusicGameSlide.module.scss";
import games from "@/data/carouselItem";

interface CarouselDotButtonProps {
    current: number;
    setCurrent: (index: number) => void;
}

const CarouselDotButton: React.FC<CarouselDotButtonProps> = ({current, setCurrent}) => {
    return (
        <div className={styles['slide-dots']}>
            {games.map((_, index) => (
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
    );
};

export default CarouselDotButton;