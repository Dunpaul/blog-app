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
                <h1 className="font-bold text-4xl text-gray-700 text-center mb-8">Who are We?</h1>
                <div className="relative w-full grid grid-cols-1 md:grid-cols-2 gap-5 my-8">
                    <div className=" pt-9 md:pt-16">
                        <p className="text-xl text-gray-900">
                            We are dedicated to providing quality content on the tech industry. Our team of experienced writers and editors are passionate about Our Blog, and we strive to create articles that are informative, engaging, and relevant to our readers.
                        </p>
                        <div className="my-5">
                            <p className="pt-4">
                                <Link href='posts/NewsArticles' className='text-[#f43f5e] hover:text-white hover:bg-[#f43f5e] px-6 py-2 border border-[#f43f5e] rounded-lg'>
                                    Start Reading
                                </Link>
                            </p>
                        </div>
                    </div>
                    <div className="h-96">
                        <img src="/images/about.svg" className="w-auto h-full mx-auto" alt="about us"/>
                    </div>
                </div>

            </section>
        </>
    );
};
export default About