import { useState } from 'react';

const usePlaceholder = () => {
    const [showPlaceholder, setShowPlaceholder] = useState(true);

    const handleFocus = () => setShowPlaceholder(false);
    const handleBlur = () => setShowPlaceholder(true);

    return { showPlaceholder, handleFocus, handleBlur };
};

export default usePlaceholder;