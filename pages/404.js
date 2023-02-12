import Head from "next/head";

export default function Custom404() {
    return (
        <>
            <Head>
                <title>
                    Not Found
                </title>
            </Head>
            <div className='mx-auto max-w-7xl py-10 px-10 sm:px-6 lg:px-8'>
                <div>
                    <h1 className="text-4xl font-medium text-center">This page is not available</h1>
                    <img className="mx-auto" src="/images/not_found.svg" alt="page not found"/>
                </div>
            </div>
        </>
    )
}