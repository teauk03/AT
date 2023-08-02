import styles from './pwdInquiry.module.scss'

const UserPasswordInquiryPage = (): JSX.Element => {
    return (
        <div className="container">
            <div className={styles.inner}>
                <h1 className={styles.h1}>비밀번호 초기화</h1>
                <div className={styles.HelppwdContent}>아이디를 입력해주세요!</div>
                <input className={styles.box} name="name" type="text" placeholder="정보입력"/>
                <div className={styles.HelppwdContent}>이름을 입력해주세요!</div>
                <input className={styles.box} name="name" type="text" placeholder="정보입력"/>
                <button className={styles.button}>비밀번호 찾기!</button>
            </div>
        </div>
    )
}


export default UserPasswordInquiryPage;