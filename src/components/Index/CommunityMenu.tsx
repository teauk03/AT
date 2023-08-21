import React from 'react';
import Link from "next/link";
import styles from '@/app/page.module.scss';

const CommunityMenu = () => {
    return (
        <section className={styles['community-section']}>
            <div className={styles['community-wrap']}>
                {Array.from({ length: 6 }).map((_, index) => (
                    <div className={styles.comunity} key={index}>
                        <h3 className={styles.title}>커뮤니티 {index + 1}</h3>
                        <p className={styles.description}>리듬게임 커뮤니티에서 토론하고 정보를 공유해 보세요.</p>
                        <Link href={`/CommunityMenu/${index}`} className={styles.communityLink}>커뮤니티 바로가기</Link>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default CommunityMenu;