'use client'
import React, {useState} from 'react';
//import styles from "@/app/(reserve)/reserve/home/ReserveHome.module.scss";
import ReserveSearchbarBody from "@/components/SearchBar/Reserve/ReserveBody/ReserveSearchbarBody";

const ReserveSearchBar = () => {
    const [inputSearch, setInputSearch] = useState('');
    const handleInputChange = (e) => {
        setInputSearch(e.target.value);
        console.log(inputSearch);
    }

    return (
        <ReserveSearchbarBody
            inputSearch={inputSearch}
            onChange={handleInputChange}
        />
    );
}


export default ReserveSearchBar;