'use client'
import Link from "next/link";
import styles from './NoticeItem.module.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUser} from "@fortawesome/free-solid-svg-icons";

const NoticeItem = ({result}: any) => {

    return (
        <div className={styles['item-container']}>
            {result.map((noticeItem: any, noticeIndex: any) => {

                return (
                    <div className={styles.list} key={noticeIndex}>
                        <FontAwesomeIcon icon={faUser} />
                        <span>{result[noticeIndex].userName}</span>
                        {/* 제목 */}
                        <Link href={`/notice/${result[noticeIndex]._id}`}>
                            <h3 className={styles.title}>{result[noticeIndex].title}</h3>
                        </Link>

                        {/* 작성한 내용 */}
                        <p className={styles['list-body']}>{result[noticeIndex].content}</p>
                    </div>
                );
            })}
        </div>
    );
}

export default NoticeItem;