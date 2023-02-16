// @flow
import  React from 'react';
import Head from "next/head";
import Link from "next/link";
import {GetStaticPaths, GetStaticProps} from "next";
import {getAboutData,getSortedAboutData} from "@/lib/about";

interface About {
    id: string;
    title: string;
    image: string;
    contentHtml: string;
}

type Props = {
    aboutData: About
};
const About = ({aboutData}: Props) => {
    // console.log(aboutData);
    return (
        <>
            <Head>
                <title>
                    About Us
                </title>
            </Head>
            <section className="mx-auto max-w-7xl px-6 lg:px-8 pt-8 mb-10">
                <h1 className="font-bold text-4xl text-gray-700 text-center mb-8">{aboutData.title}</h1>
                <div className="relative w-full grid grid-cols-1 md:grid-cols-2 gap-5 my-8">
                    <div className=" pt-9 md:pt-16">
                        <p
                            className="text-xl text-gray-900"
                            dangerouslySetInnerHTML={{__html:aboutData.contentHtml}}
                        />
                        <div className="my-5">
                            <p className="pt-4">
                                <Link href='posts/NewsArticles' className='text-[#f43f5e] hover:text-white hover:bg-[#f43f5e] px-6 py-2 border border-[#f43f5e] rounded-lg'>
                                    Start Reading
                                </Link>
                            </p>
                        </div>
                    </div>
                    <div className="h-96">
                        <img src={aboutData.image} className="w-auto h-full mx-auto" alt="about us"/>
                    </div>
                </div>

            </section>
        </>
    );
};
export default About

export const getStaticProps: GetStaticProps = async () => {
    const allAboutData=  getSortedAboutData()
    const aboutData = await getAboutData();
    return {
        props: {
            allAboutData,
            aboutData,
        },
        revalidate: 10,
    }
}