import '@/styles/globals.scss'
import {Inter} from 'next/font/google'
import {Metadata} from "next";
import Providers from "@/context/Providers";
import {NavbarComponent} from "@/components/UI/NavbarGlobal/Navbar";
import GlobalLayout from "@/components/GlobalLayout";

const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
}

const RootLayout = async ({children}: {
    children: React.ReactNode
}): Promise<JSX.Element> => {

    return (
        <html lang="ko">
        <body className={inter.className}>
        <Providers>
            <NavbarComponent/>
            {children}
        </Providers>
        </body>
        </html>
    )
}

export default RootLayout;