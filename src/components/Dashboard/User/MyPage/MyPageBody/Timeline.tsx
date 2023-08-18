import React from 'react';
import styles from "@/components/Dashboard/User/MyPage/MyPage.module.scss";
import Link from "next/link";
import Image from "next/image";

const Timeline = () => {
    return (
        <section className={styles.timeline}>
            <h1 className={styles['timeline-title']}>최근 활동</h1>
            <div className={styles['timeline-container']}>
                <article className={styles['timeline-item']}>
                    <Image
                        src="https://i.namu.wiki/i/alaNtOwHOtGVDKOfwWmgzJbIuxktCFqmzLQFckSP20kkNylAsjMDzizFLAUdiZD4y2KTSzF7VBiP78iSctRdRzpDhAlVkp310sn07cTRCmY5-omaf2KbPnDNIAAx4gC_2-jin2dILqc2PgmezOKmBQ.webp"
                        alt="유저 최근 활동(게임) 이미지"
                        width={256}
                        height={101}
                    />
                    <div className={styles['timeline-item-info']}>
                        <h2 className={styles['timeline-item-title']}>
                            <Link href="#">SOUND VOLTEX</Link>
                        </h2>
                        <p className={styles['timeline-item-date']}>날짜:
                            <span> 2021년 4월 20일</span>
                        </p>
                        <p className={styles['timeline-item-date']}>시간:
                            <span> 1hour</span>
                        </p>
                    </div>
                </article>
            </div>
        </section>
    );
};

export default Timeline;