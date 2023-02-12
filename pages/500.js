import Head from "next/head";

export default function Custom500() {
    return (
        <>
            <Head>
                <title>
                    Server Error
                </title>
            </Head>
            <div className='mx-auto max-w-7xl py-10 px-10 sm:px-6 lg:px-8'>
                <div>
                    <h1 className="text-4xl font-medium text-center">A server-side error has occured</h1>
                    <img className="mx-auto" src="/images/server_down.svg" alt="page not found"/>
                </div>
            </div>
        </>
    )
}