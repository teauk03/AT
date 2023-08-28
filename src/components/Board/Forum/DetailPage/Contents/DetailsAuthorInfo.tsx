import React from 'react';
import styles from '@/components/Board/Forum/DetailPage/DetailsPage.module.scss';
import {AiOutlineUser} from "react-icons/ai";

const DetailsAuthorInfo = ({ userName }: { userName: string }) => (
    <div className={styles['author-wrapper']}>
        <AiOutlineUser/>
        <div className={styles['post-author']}>
            {userName}
        </div>
    </div>
);


export default DetailsAuthorInfo;