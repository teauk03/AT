'use client'
import React from "react";
import { SessionProvider } from 'next-auth/react'

// (NextAuth)Provider : 사용자가 로그인할 수 있는 방법
const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    return (
        <SessionProvider>
            {children}
        </SessionProvider>
    )
}
export default AuthProvider