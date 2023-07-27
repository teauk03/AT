import styles from "./Account.module.scss"

export default function UserAccountPage() {
    return (
        <>
            <main className={styles.root__main}>
                <div className={styles.account}>
                    <div className={styles.account__top}>
                        <section className={styles.account__profile}>
                            <div className={styles.account__image}></div>
                            <div className={styles.account__name}>
                                <span>(UserName - DB data)님 즐거운 하루 되세요.</span>
                            </div>
                        </section>
                        <section className={styles.account__activity}>
                            <div className={styles.account__joinday}>
                                <h2>가입일</h2>
                                <div className={styles.account__joindayItem}>
                                    <span>DB에 넣어보고 꺼내보도록 노력해봄</span>
                                </div>
                            </div>
                            <div className={styles.account__writen}>
                                <h2>작성</h2>
                                <div className={styles.account__writenItem}>
                                    <span>게시물 : API 만들어봄</span>
                                </div>
                                <div className={styles.account__writenItem}>
                                    <span>댓글 : API 만들어봄</span>
                                </div>
                            </div>
                        </section>
                    </div>

                    <div className={styles.account__bottom}>
                        <section className={styles.account__info}>
                            <div className={styles.account__infoEmail}>
                                <h2>Email</h2>
                                <div className={styles.account__infoTitle}>
                                    <span className={styles.account__infoDetail}>User Email</span>
                                </div>
                            </div>
                            <div className={styles.account__infoPassword}>
                                <h2>Password</h2>
                                <div className={styles.account__infoTitle}>
                                    <span className={styles.account__infoDetail}>User Passrod***</span>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </main>
        </>
    )
}