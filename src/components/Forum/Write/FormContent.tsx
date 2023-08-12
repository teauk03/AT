'use client'
import styles from '@/components/Forum/Write/write.module.scss'
import {FormContainerProps} from "@/types/Borad";

const FormContent
    : React.FC<FormContainerProps> = (
    {
        initialTitle = '',
        initialContent = '',
        onSubmit,
        onTitleChange,
        textLength = 0,
        buttons
    }) => {

    return (
        <form className={styles.form} onSubmit={onSubmit}>
            <div className={styles.contents}>
                <div className={styles['title-wrapper']}>
                    <input
                        className={styles['input-title']}
                        name="title"
                        type="text"
                        placeholder='글 제목'
                        defaultValue={initialTitle}
                        onChange={onTitleChange}
                    />
                    <p className={styles['title-size']}>
                        {textLength} / 80
                    </p>
                </div>

                <textarea
                    className={styles.content}
                    name="content"
                    defaultValue={initialContent}
                />
            </div>

            <div className={styles['btn-wrapper']}>
                {buttons}
            </div>
        </form>
    )
}

export default FormContent;