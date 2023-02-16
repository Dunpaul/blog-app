import { NextPage } from 'next';
import Head from 'next/head';

const ErrorPage: NextPage = () => {
    return (
        <>
            <Head>
                <title>500 – Internal Server Error</title>
            </Head>
            <div>
                <h1>500 – Internal Server Error</h1>
                <p>Sorry, something went wrong.</p>
            </div>
        </>
    );
};

export default ErrorPage;