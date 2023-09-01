'use client'
import React, { useState, useEffect } from 'react';

const Page = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const gameId = 1; // 예시로 1번 게임의 ID를 전달

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`http://localhost:3000/api/game/${gameId}`);

                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }

                const result = await response.json();

                if (result.success) {
                    setData(result.data);
                } else {
                    setError(result.message || 'An error occurred');
                }
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [gameId]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div>
            <h2>테스트 페이지</h2>
            <div>{JSON.stringify(data)}</div>  {/* 예시로 데이터를 문자열화하여 표시합니다. */}
        </div>
    );
};

export default Page;
