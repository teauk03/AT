'use client'
import React, { useState, useEffect } from 'react';
import {Game, GameDataResponse, Pricing, Image} from "@/types/Game";

const Page = () => {
    const [data, setData] = useState<GameDataResponse | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const gameId = 1; // 예시로 1번 게임의 ID를 전달

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`http://localhost:3000/api/game/select`);

                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }

                const result = await response.json();

                if (result.success) {
                    setData(result.data);
                } else {
                    setError(result.message || 'An error occurred');
                }
            } catch (err: any) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [gameId]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    const isGame = (item: Game | Pricing | Image): item is Game => {
        return 'title' in item;
    }


    console.log(data)
    return (
        <div>
            <h2>테스트 페이지</h2>
            <div>{JSON.stringify(data)}</div>
            <h2>Game Title</h2>
            <div>{data?.game.title}</div>
            <h2>Pricing</h2>
            <div>{data?.pricing.price}</div>

        </div>
    );
};

export default Page;