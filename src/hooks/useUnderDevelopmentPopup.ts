import { useState } from 'react';

const useUnderDevelopmentPopup = () => {
    const [showPopup, setShowPopup] = useState(false);

    const handleClick = (e: MouseEvent) => {
        e.preventDefault();
        alert("준비중입니다");
        setShowPopup(true);
    };

    return {showPopup, handleClick};
};

export default useUnderDevelopmentPopup;