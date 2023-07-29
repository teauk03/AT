'use client'
import styles from "./UserAccount.module.scss";

const UserAccountComponent = (): JSX.Element => {
    return (
        <div className={styles.wrap__profile}>
            <h1>Profile</h1>
            <main className={styles.main}>
                <section className={styles.main__top}>
                    <div className={styles.profile__img}></div>
                    <div className={styles.profile__name}>
                        <span>서강준</span>
                    </div>
                    <div className={styles.profile__intro}>
                        <h5>Intro</h5>
                        <textarea className={styles.profile__introContent} name="intro" id="intro"></textarea>
                    </div>
                </section>
                <section className={styles.main__mid}>
                    <div className={styles.profile__account}>
                        <h5>Birth</h5>
                        <input className={styles.profile__accountInput} type="text" value={"2003.03.17"} disabled/>
                    </div>

                    <div className={styles.profile__account}>
                        <h5>Email</h5>
                        <input className={styles.profile__accountInput} type="text" value={"tjrkdwns123@ansan.ac.kr"}
                               disabled/>
                    </div>

                    <div className={styles.profile__account}>
                        <h5>Password</h5>
                        <input className={styles.profile__accountInput} type="password" value={"tjrkdwns123"} disabled/>
                    </div>
                </section>

                <section className={styles.main__bottom}>
                    <div className={styles.activity__info}>
                        <h5>Activity Info</h5>
                        <div className={styles.activity__infoDetail}>
                            <p>Post: 0</p>
                            <p>Comment: 0</p>
                            <p>JoinDay: 2023.07.25</p>
                        </div>
                    </div>
                </section>
                <section className={styles.main__last}>
                    <div className={styles.deleteAccount}>
                        <button className={styles.deleteAccount__btn}>Delete Account</button>
                    </div>
                </section>
            </main>
        </div>
    )
}

export {UserAccountComponent};