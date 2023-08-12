'use client'
import React, {useState} from 'react';
import { useDocsAPI } from '@/hooks/Support/useDocsAPI';
import { DocsInputObjectId } from '@/types/Document';
import styles from "@/components/Help/Support/support.module.scss";


/* 문서 출력 컴포넌트 */
const DocumentList = (props: DocsInputObjectId): JSX.Element => {
  const saveDocsData = useDocsAPI(props._id);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleDocumentContent = (index: number) => {
    setOpenIndex(prevIndex => (prevIndex === index ? null : index));
  };

  return (
      <>
        {saveDocsData.length > 0 ?
            saveDocsData.map((docsItem, docsIndex) =>
                <div
                    className={styles['support-list']}
                    key={docsIndex}
                    onClick={() => toggleDocumentContent(docsIndex)}
                >
                  <div className={styles['support-title']}>
                    <span className={styles['title-number']}>{docsIndex+1}</span>
                    <strong className={styles['title-text']}>{docsItem.title}</strong>
                  </div>
                  <div className={`${styles['support-content']} ${openIndex === docsIndex ? styles['open'] : ''}`}>
                    <span>{docsItem.content}</span>
                  </div>
                </div>
            )
            : <p className={styles['none-text']}>문서가 없습니다.</p>}
      </>
  );
};

export default DocumentList;