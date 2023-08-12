'use client'
import React from 'react';
import styles from './DivisionLine.module.scss';
import {DivisionLineProps} from '@/types/DivisionLine';

const DivisionLine = ({text}: DivisionLineProps) => (
    <div className={styles['division-line']}>
        <span className={styles['line-text']}>{text}</span>
    </div>
);

export default DivisionLine;