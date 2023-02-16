import * as React from 'react';
import { NextPageContext } from 'next';

type Props = {

};
const Custom500 = (props: Props) => {
    return (
        <div className='mx-auto max-w-7xl py-10 px-10 sm:px-6 lg:px-8'>
            <div>
                <h1 className="text-4xl font-medium text-center">A server-side error has occurred</h1>
                <img className="mx-auto" src="/images/server_down.svg" alt="page not found"/>
            </div>
        </div>
    );
};

export default Custom500;

Custom500.getInitialProps = ({ res }: NextPageContext) => {
    // @ts-ignore
    res.statusCode = 500;
    return {};
};