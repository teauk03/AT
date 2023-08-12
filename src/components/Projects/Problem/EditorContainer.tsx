'use client'
import axios from "axios";
import React, {ChangeEvent, useState} from 'react';
import styles from "@/components/Projects/Problem/Problem.module.scss";
import useNavigation from "@/hooks/useNavigationGoBack";
import useUnderDevelopmentPopup from "@/hooks/useUnderDevelopmentPopup";

const EditorContainer = () => {
    const [
        code,
        setCode
    ] = useState('');

    const [
        output,
        setOutput
    ] = useState('');

    /* 뒤로가기 커스텀 훅 & 개발용 커스텀 훅*/
    const { handleGoBack } = useNavigation();
    const { handleClick } = useUnderDevelopmentPopup();

    const handleCodeChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setCode(e.target.value);
    };

    const handleRunCode = async () => {
        try {
            /* 서버에 코드를 전송하고 실행 */
            alert('실행합니다.')
            const response = await axios.post('/api/project/runCode', { code });
            setOutput(response.data.output);
        } catch (error) {
            console.error(error);
            setOutput('Error : 코드를 실행할 수 없습니다.');
        }
    };

    return (
        <>
            <nav className={styles['ide-navbar']}>
                <button className={styles['ide-button']} onClick={handleGoBack}>Back</button>
                <button className={styles['ide-button']} onClick={handleClick}>Dark Mode</button>
                <button className={styles['ide-button']} onClick={handleRunCode}>Run</button>
            </nav>
            <div className={styles.ide}>
                {/* 사이드바 */}
                <div className={styles['ide-sidebar']}>
                </div>

                <div className={styles['ide-wrapper']}>
                    {/* 코드 편집기 */}
                    <div className={styles['ide-editor']}>
                        <textarea
                            className={styles.editor}
                            name="code"
                            value={code}
                            onChange={handleCodeChange}
                        />
                    </div>

                    {/* 터미널 */}
                    <div className={styles['ide-terminal']}>
                        {output}
                    </div>
                </div>
            </div>
        </>
    );
};

export default EditorContainer;