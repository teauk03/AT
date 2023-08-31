'use client'
import React from 'react';
import styles from "@/components/SearchBar/Reserve/ReserveSearchBar.module.scss";
import {BsSearch} from "react-icons/bs";
import useCustomRouter from "@/hooks/useCustomRouter";

// type ReserveSearchProp = {
//
// }

const ReserveSearchbarBody = ({onChange, inputSearch}) => {
    const { pathname, push, query } = useCustomRouter();
    console.log(inputSearch)
    return (
        <div className={styles['search-bar']}>
            <input
                className={styles['search-box']}
                placeholder={'게임을 입력해주세요.'}
                type="text"
                autoFocus
                onChange={onChange}
            />
            <button
                className={styles['search-button']}
                onClick={()=>{
                    push({
                        pathname,
                        query: {
                            q: inputSearch
                        },
                    })
                }}
            >
                <BsSearch/>
            </button>
        </div>
    );
};

export default ReserveSearchbarBody;