import styles from './idInquiry.module.scss'

const UserIdInquiryPage = () => {
    return (
        <div className="container">
            <div className={styles.inner}>
                <h1 className={styles.h1}>아이디 찾기</h1>
                <div className={styles.HelpidContent}>정보를 입력해주세요!</div>
                <input className={styles.box} name="name" type="text" placeholder="정보입력" />
                <button className={styles.button} >아이디 찾기!</button>
                </div>
            </div>
        
    )
}

export default UserIdInquiryPage;