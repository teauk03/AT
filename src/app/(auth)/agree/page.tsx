import styles from "./agree.module.scss"

const AgreementPage = (): JSX.Element => {
    return (
        <>
            <div className={styles.top}>
                <a className={styles.top__logo} href="/">DataArtist</a>
            </div>
            <main className={styles.root__main}>
                <span className={styles.agree__title}>약관동의</span>
                <section className={styles.agreeAll__terms}>
                    <div className={styles.agreeAll__termsContent}>
                        <input className={styles.agreeAll__termsInput} type='checkbox' name="terms"/>
                        <span className={styles.agreeAll__termsTitle}>약관 전체 동의</span>
                    </div>
                </section>
                <section className={styles.agree__terms}>
                    <div className={styles.agree__termsContent}>
                        <input className={styles.agree__termsInput} type="checkbox" name="terms"/>
                        <span className={styles.agree__termsTitle}>이용약관 동의(필수)</span>
                        <br />
                        <span className={styles.agree__termsDetail}>(자세히 보기)</span>
                    </div>
                    <div className={styles.agree__termsContent}>
                        <input className={styles.agree__termsInput} type="checkbox" name="terms"/>
                        <span className={styles.agree__termsTitle}>개인정보 수집 동의(필수)</span>
                        <br />
                        <span className={styles.agree__termsDetail}>(자세히 보기)</span>
                    </div>
                    <div className={styles.agree__termsContent}>
                        <input className={styles.agree__termsInput} type="checkbox" name="terms"/>
                        <span className={styles.agree__termsTitle}>광고성 정보 동의(필수)</span>
                        <br />
                        <span className={styles.agree__termsDetail}>(자세히 보기)</span>
                    </div>
                </section>
                <div className={styles.agree__submit}>
                    <button className={styles.agree__submitBtn} type='submit'>다음</button>
                </div>
            </main>
        </>
    )
};

export default AgreementPage;