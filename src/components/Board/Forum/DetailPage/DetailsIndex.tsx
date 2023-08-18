'use client'
import React, {useState} from 'react';
import styles from './DetailsPage.module.scss';
import {useDeletePost} from "@/hooks/Board/useDeletePost";
import DetailsAuthorInfo from "@/components/Board/Forum/DetailPage/Contents/DetailsAuthorInfo";
import DetailsContentButtons from "@/components/Board/Forum/DetailPage/Contents/DetailsContentButtons";
import DetailsMainContents from "@/components/Board/Forum/DetailPage/Contents/DetailsMainContents";

const DetailPage = ({ result, USER_SESSION }: any) => {
    const { handleDelete } = useDeletePost();
    const [isMenuVisible, setMenuVisible] = useState(false);

    return (
        <>
            {/* Contents Header */}
            <div className={styles['details-home']}>
                <DetailsAuthorInfo userName={result.userName} />
                <DetailsContentButtons isMenuVisible={isMenuVisible} setMenuVisible={setMenuVisible} result={result} USER_SESSION={USER_SESSION} handleDelete={handleDelete} />
            </div>

            {/* Contents Main */}
            <DetailsMainContents title={result.title} content={result.content} />
        </>
    );
};

export default DetailPage;