import React from "react";
import Head from 'next/head'
import Navbar from "./Navbar"
import Footer from "./Footer"

export const siteTitle = 'Our Blog'

type Props = {
 children: React.ReactNode;
}

const Layout = ({children}: Props) =>
    (
        <div>
            <Head>
                <link rel="icon" href="/favicon.ico"/>
                <title>
                    {siteTitle}
                </title>
            </Head>
            <header>
                <Navbar/>
            </header>
            <main>
                {children}
            </main>
            <footer>
                <Footer/>
            </footer>
        </div>
    )

export default Layout