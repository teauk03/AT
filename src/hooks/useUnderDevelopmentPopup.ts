import { useState } from 'react';

/* HTMLAnchorElement : 링크가 클릭될 때 팝업을 표시하고 이벤트 전파를 중지
 * HTMLButtonElement : 버튼이 클릭될 때 팝업을 표시하고 이벤트 전파를 중지 */
const useUnderDevelopmentPopup = () => {
    const [showPopup, setShowPopup] = useState(false);

    const handleClick: React.MouseEventHandler<HTMLAnchorElement> = (e) => {
        alert("준비중입니다");
        e.preventDefault();
        setShowPopup(true);
    };

    return {showPopup, handleClick};
};

export default useUnderDevelopmentPopup;