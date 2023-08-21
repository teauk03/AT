import React from 'react';
import Link from "next/link";
import DynamicRoute from "@/app/dataweb/dynamicRoute/page";

const Query = () => {
    const users = [
        { name: "John Doe", age: 30, email: "john.doe@example.com" },
        { name: "Jane Smith", age: 25, email: "jane.smith@example.com" },
        { name: "Tom Johnson", age: 22, email: "tom.johnson@example.com" },
        { name: "Emily Davis", age: 35, email: "emily.davis@example.com" },
        { name: "Michael Brown", age: 40, email: "michael.brown@example.com" },
    ];

    return (
        <div style={{margin:'10px 100px'}}>
            <p>Link 태그에서 &quotpathname&quot과 &quotquery&quot를 작성해서 넘길수있다.</p>
            <h3>DynamicRoute - 링크 : {'href={{ pathname: `/dataweb/query/${user.name}`, query: { age: user.age, email: user.email } }}'}</h3>
            {users.map((user, index) => (
                <div key={index}>
                    <div>
                        <Link href={{ pathname: `/dataweb/query/email/${user.name}`, query: { age: user.age, email: user.email } }}>
                            {user.email}의 프로필 보기
                        </Link>
                    </div>
                </div>
            ))}
            <h3>DynamicRoute - 링크 : {'href={`/dataweb/query?${user.name}`}'}</h3>
            {users.map((user, index) => {
                return (
                    <div key={index}>
                        <div>
                            <Link href={{ pathname: `/dataweb/query/name/${user.name}`, query: { name: user.name, age: user.age, email: user.email } }}>
                                [{user.name}] 의 프로필 보기
                            </Link>
                        </div>
                    </div>
                )
            })}
            <h3>DynamicRoute (프롭스전달) - 링크 : {'/dataweb/dynamicRoute/${user.name}'}</h3>
            {users.map((user, index) => {
                return (
                    <div key={index}>
                        <DynamicRoute user={user}/>
                    </div>
                )
            })}
        </div>
    );
};

export default Query;