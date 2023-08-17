'use client'
import React, {useState} from 'react';
import styles from "@/components/Help/Support/support.module.scss";
import SUPPORT_DATA from '@/data/Support/data-support-items.json';


/* 문서 출력 컴포넌트 */
const DocumentList = (): JSX.Element => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleDocumentContent = (index: number) => {
    setOpenIndex(prevIndex => (prevIndex === index ? null : index));
  };

  return (
      <section className={styles['mid-section']}>
        {SUPPORT_DATA.REGISTER.length > 0 ?
            SUPPORT_DATA.REGISTER.map((support, index) =>
                <div
                    className={styles['support-list']}
                    key={index}
                    onClick={() => toggleDocumentContent(index)}
                >
                  <div className={styles['support-title']}>
                    <span className={styles['title-number']}>{index + 1}</span>
                    <span>{support.subject}</span>
                    <strong className={styles['title-text']}>{support.title}</strong>
                  </div>
                  <div className={`${styles['support-content']} ${openIndex === index ? styles['open'] : ''}`}>
                    <span>{support.content}</span>
                  </div>
                </div>
            )
            : <p className={styles['none-text']}>문서가 없습니다.</p>}
      </section>
  );
};

export default DocumentList;