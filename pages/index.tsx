import Head from 'next/head'
// import Image from 'next/image'
import  {siteTitle} from '@/components/Layout'
import HeroSection from "@/components/HeroSection";
import SampleNews from "@/components/SampleNews";
import { getSortedPostsData } from '@/lib/posts'
import {GetStaticProps} from "next";
import React from "react";

interface Post {
    title: string;
    date: string;
    id: string;
    image: string;
}

type Props = {
    allPostsData: Post[];
}

const Home =({allPostsData}:Props) => {
    return (
    <>
      <Head>
          <title>
              {siteTitle}
          </title>
      </Head>
        <section className='container mx-auto max-w-7xl px-6 lg:px-8 mb-10'>
            <HeroSection />
        </section>

        <section className="container mx-auto max-w-7xl px-6 lg:px-8 mb-10">
            <SampleNews allPostsData={allPostsData} />
        </section>
    </>
  )
}

export default Home;


export const getStaticProps: GetStaticProps = async () => {
    const allPostsData = getSortedPostsData();
    return {
        props: {
            allPostsData,
        },
        revalidate: 10,
    }
}
