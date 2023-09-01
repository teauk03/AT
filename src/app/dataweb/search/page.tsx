'use client'

import React, {useState} from 'react';
type resultType = number[];

const SearchPage = () => {
    const array = [1,2,3,4,5];
    /* 검색 & 결과 상태관리 */
    const [search, setSearch] = useState('');
    const [result, setResult] = useState<resultType | null>(null);

    /* Change Status */
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
        console.log('handleChange search : ', search)
    }

    /* Filtered */
    const handleClick = () => {
        const searchValue = parseInt(search);
        console.log('handleClick searchValue : ', searchValue);

        if (!isNaN(searchValue)) {
            const userInputFilter: resultType = array.filter(item => item === searchValue);
            setResult(userInputFilter)
        } else {
            alert('Error')
        }
    }

    /* 렌더링 */
    return (
        <div>
            <div>
                <input type="text" onChange={handleChange}/>
                <button onClick={handleClick}>Search</button>
            </div>
            <div>검색 결과 : {result}</div>
            <div>사용자 입력 : {search}</div>
        </div>
    );
};

export default SearchPage;