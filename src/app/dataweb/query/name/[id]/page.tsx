'use client'
import React from 'react';
import {useSearchParams} from "next/navigation";

const QueryStringPage = (props: any) => {
    // URL에서 name 값을 가져옵니다.
    const params = useSearchParams();
    const name = params ? params.get('name') : '';
    console.log('QueryStringPage name', name)
    console.log('QueryStringPage params', params)
    console.log('QueryStringPage props', props)
    return (
        <div>
            <h3>QueryStringPage</h3>
            <p>
                파라미터로 "props"를 등록하면 [어쩌구] 자리에 유저가 입력한 내용을 "props"변수에 자동으로 담아줍니다.<br/>
                진짠지 /detail/123 같은 URL로 방문해서 출력해봅시다.
            </p>
            {name ? `안녕하세요, 이름은 ${name} 입니다.` : '이름이 없습니다.'}
        </div>
    );
};

export default QueryStringPage;