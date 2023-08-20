"use client";
import { SessionProvider } from "next-auth/react";
import {Props} from '@/types/next-auth';

function Providers({ children }: Props) {
    return <SessionProvider>{children}</SessionProvider>
}

export default Providers;