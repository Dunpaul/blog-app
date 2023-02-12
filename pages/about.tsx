// @flow
import  React from 'react';
import Head from "next/head";
import Link from "next/link";

type Props = {

};
const About = (props: Props) => {
    return (
        <>
            <Head>
                <title>
                    About Us
                </title>
            </Head>
            <section className="mx-auto max-w-7xl px-6 lg:px-8 pt-8 mb-10">
                <h1 className="font-semibold text-4xl text-center text-gray-800 mb-8">Who are We</h1>
                <div>
                    <p className="text-xl text-gray-900">
                        We are dedicated to providing quality content on the tech industry. Our team of experienced writers and editors are passionate about Our Blog, and we strive to create articles that are informative, engaging, and relevant to our readers.
                    </p>
                </div>
                <div className="my-5">
                    <p>
                        <Link href='posts/NewsArticles' className='text-[#f43f5e] hover:text-white hover:bg-[#f43f5e] px-6 py-2 border border-[#f43f5e] rounded-lg'>
                            Start Reading
                        </Link>
                    </p>
                </div>
            </section>
        </>
    );
};
export default About