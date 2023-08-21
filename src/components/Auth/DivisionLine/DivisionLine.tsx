'use client'
import React from 'react';
import styles from './DivisionLine.module.scss';
import {DIVISION_LINE_PROPS} from "@/types/UI";

const DivisionLine = ({text}: DIVISION_LINE_PROPS) => (
    <div className={styles['division-line']}>
        <span className={styles['line-text']}>{text}</span>
    </div>
);

export default DivisionLine;