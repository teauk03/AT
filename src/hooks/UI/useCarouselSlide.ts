'use client'
import {useState} from 'react';

const UseCarouselSlide = (initialState = 0) => {
    const [current, setCurrent] = useState(initialState);

    //const nextSlide = () => setCurrent(current === games.length - 1 ? 0 : current + 1);
    //const prevSlide = () => setCurrent(current === 0 ? games.length - 1 : current - 1);

    return { current, setCurrent };
};

export default UseCarouselSlide;