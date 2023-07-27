'use client'
import styles from './write.module.scss'
import useCreatePost from "@/hooks/Form/useCreatePost";

const Write = () => {
    const { handleSubmit, isLoading } = useCreatePost({
        onSuccess: () => {
            alert('글이 성공적으로 작성되었습니다.');
            window.location.href = '/notice';
        },
        onError: (error) => {
            alert(`${error} 글 작성 중 에러가 발생했습니다. 다시 시도해주세요.`);
        }
    });

    return (
        <div className={styles.container}>
            <form className={styles.form} onSubmit={handleSubmit}>
                {/* Header */}
                <div className={styles['title-wrapper']}>
                    <input
                        style={{display:"none"}}
                        name="userName"
                    />
                    <input
                        className={styles.title}
                        name="title"
                        type="test"
                        placeholder="글 제목"
                    />
                <button className={styles['submit-btn']} disabled={isLoading} type="submit">등록</button>
                </div>
                <div className={styles['title-validation']}>
                    <p className={styles['title-size']}>0 / 100</p>
                </div>

                {/* Main */}
                <textarea
                    className={styles.content}
                    name="content"
                    placeholder="글 내용"
                />
            </form>
        </div>
    )
}

export default Write;