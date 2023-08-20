import React from 'react';
import {connectDB} from "@/utils/mongoDb";

const TestWeb = async () => {
    const db = (await  connectDB).db("reservation");
    const reservation = await db.collection('reservation_list').find().toArray();

    return (
        <main style={{maxWidth: '600px', margin: '0 auto'}}>
            <h1>테스트 페이지</h1>
            <div>{reservation[1].name}</div>
            <div>{reservation[1].division_title}</div>
            <div>{reservation[1].time}</div>
            <div>{reservation[1].days}</div>
            <p>특정 요소만 출력</p>
            {reservation.map((item, index) => (
                <>
                    <h3>모두 접근</h3>
                    <div key={index}>
                        {item.name}
                    </div>
                    <h3>인덱스로접근</h3>
                    <div>
                        {reservation[0].name}
                    </div>
                </>
            ))}
            <p>모두 출력</p>
            {reservation.map((item, index) => (
                <div key={index}>
                    {Object.keys(item).map((key) => (
                        <div key={key}>
                            {key}: {item[key]}
                        </div>
                    ))}
                </div>
            ))}

        </main>
    );
};

export default TestWeb;