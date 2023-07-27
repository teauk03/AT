import React from 'react';
import styles from './PrimaryButton.module.scss'

const PrimaryButton = () => {
    return (
        <>
            <button className={styles['submit-btn']} type="submit">
                Sign In
            </button>
        </>
    );
};

export default PrimaryButton;