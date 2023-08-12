'use client'
import React from 'react';
import styles from "@/components/Help/Support/SupportWrite/SupportWrite.module.scss";
import SupportWriteSelectRadio from "@/components/Help/Support/SupportWrite/SupportWriteSelectInput";
import SupportWriteInputField from "@/components/Help/Support/SupportWrite/SupportWriteInputField";
import {useRouter} from "next/navigation";

const SupportWriteClientContainer = () => {
    const router = useRouter();

    return (
        <div className={styles.container}>
            {/* Write Board Title */}
            <div className={styles['content-title']}>
                <h2>고객지원</h2>
                <span>일반문의</span>
            </div>
            {/*  action="/api/help/new" method={'POST'} */}
            {/* Write Board Form */}
            <form className={styles['support-form']}>
                <div className={styles.tap}>
                    <ul>
                        <li>일반문의</li>
                        <li>버그문의</li>
                    </ul>
                </div>
                <p className={styles.descript}>
                    더 좋은 서비스를 위한 제안 및 건의사항을 말씀해 주세요.<br/>
                    여러분의 의견을 듣고 좀 더 고민하고, 발전하는 DA가 되겠습니다.
                </p>
                <fieldset className={styles['support-fieldset']}>
                    {/* Write Board Radio Check Wrapper */}
                    <div className={styles['cate-radio']}>
                        <table className={styles['table-container']}>
                            <tbody className={styles['table-body']}>
                            <SupportWriteSelectRadio
                                options={[
                                    {value: 'PC', label: 'PC'},
                                    {value: 'Mobile', label: 'Mobile'},
                                ]}
                                name='device'
                                title='기기'
                                id='device'
                            />
                            <SupportWriteSelectRadio
                                options={[
                                    {value: 'All', label: 'All'}
                                ]}
                                name='category'
                                title='카테고리'
                                id='category'
                            />
                            </tbody>
                        </table>
                    </div>

                    {/* Write Board TextBox Wrapper */}
                    <div className={styles['write-editor']}>
                        {/* [Input] title-text */}
                        <SupportWriteInputField
                            className='title-text'
                            placeholder='제목을 입력해주세요.'
                            inputType='text'
                            name='title'
                        />

                        {/* [TextArea] body-text */}
                        <SupportWriteInputField
                            className='body-text'
                            placeholder='문의사항을 입력해주세요.'
                            inputType='textarea'
                            name='content'
                        />
                    </div>

                    {/* Write Board Button Wrapper */}
                    <div className={styles['board-button']}>
                        <button className={styles['del-button']}>
                            돌아가기
                        </button>
                        <button className={styles['submit-button']} type='submit'>
                            문의하기
                        </button>
                    </div>
                </fieldset>
            </form>
        </div>
    );
};

export default SupportWriteClientContainer;