import React from 'react';
import styles from '@/components/Dashboard/User/MyPage/MyPage.module.scss';
import {getServerSession} from "next-auth";
import {authOptions} from "@/pages/api/auth/[...nextauth]";
import Image from "next/image";
import Link from "next/link";
import DefaultIMAGE from "../../../../../../public/img/Logo.jpg";
import getConnectServerDb from "@/utils/DB/getConnectServerDb";
import LoadingForum from "@/components/UI/Loading/LoadingForum";
import formatDate from "@/utils/formatDate";
import calculateDuration from "@/utils/calculateDuration";
import ToggleMenubar from "@/components/UI/Nav/MenuNavigation/ToggleMenubar";

const DynamicAccount = async () => {
    /* 세션 검증 */
    const session = await getServerSession(authOptions);
    const user = session?.user || null;

    if (!user) {
        return {
            redirect: {
                destination: "login",
                permanent: false,
            },
        }
    }

    /* DB 쿼리 */
    const {results} = await getConnectServerDb("reservation", "reservation_list", 3);
    if (!results) return <LoadingForum/>

    /* MenuNavbar 프롭스 배열 (버튼 라벨) */
    const MenuNavbarProps = [
        {label:"최근 플레이"},
        {label:"최근 활동"},
        {label:"팔로우"}
    ]

    /* 렌더링 */
    return (
        <div className={styles.container}>
            <main className={styles.main}>
                <section className={styles.profile}>
                    <Image src={DefaultIMAGE} alt='유저 프로필 이미지' width={100} height={100}/>
                    <div className={styles['profile-info']}>
                        <div>
                            <span>닉네임</span> : {user.name}<br/>
                            <span>게임</span> : {user.skills}<br/>
                        </div>
                        <div>
                            <span>소개</span> : {user.summary}
                        </div>
                    </div>
                </section>
                <section className={styles.timeline}>
                    <ToggleMenubar props={MenuNavbarProps}/>
                    <div className={styles['timeline-container']}>
                        {results.map((item, index) => {
                            return (
                                <article key={index} className={styles['timeline-item']}>
                                    {/* TODO : DB에 링크 저장 */}
                                    <Image
                                        src="https://i.namu.wiki/i/alaNtOwHOtGVDKOfwWmgzJbIuxktCFqmzLQFckSP20kkNylAsjMDzizFLAUdiZD4y2KTSzF7VBiP78iSctRdRzpDhAlVkp310sn07cTRCmY5-omaf2KbPnDNIAAx4gC_2-jin2dILqc2PgmezOKmBQ.webp"
                                        alt="유저 최근 활동(게임) 이미지"
                                        width={256}
                                        height={101}
                                    />
                                    <div className={styles['timeline-item-info']}>
                                        <h2 className={styles['timeline-item-title']}>
                                            <Link href="#">{item.division_title}</Link>
                                        </h2>
                                        <p className={styles['timeline-item-date']}>날짜:{' '}
                                            <span>{formatDate(item.days)}</span>
                                        </p>
                                        <p className={styles['timeline-item-date']}>시간:{' '}
                                            <span>{item.time} ({calculateDuration(item.time)})</span>
                                        </p>
                                    </div>
                                </article>
                            )
                        })}
                    </div>
                </section>
            </main>
        </div>
    );
};

export default DynamicAccount;