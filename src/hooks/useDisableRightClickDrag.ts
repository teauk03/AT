import { useEffect } from 'react';


/* 마우스 우클릭 및 드래그 앤 드롭 방지(금지)를 위한 커스텀 훅 */
const useDisableRightClickAndDrag = () => {
    useEffect(() => {
        const handleRightClick = (e: MouseEvent) => e.preventDefault();
        const handleDragStart = (e: MouseEvent) => e.preventDefault();


        document.addEventListener('contextmenu', handleRightClick);
        document.addEventListener('dragstart', handleDragStart);

        return () => {
            document.removeEventListener('contextmenu', handleRightClick);
            document.removeEventListener('dragstart', handleDragStart);
        };
    }, []);
};

export default useDisableRightClickAndDrag;