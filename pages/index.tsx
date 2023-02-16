import Head from 'next/head'
// import Image from 'next/image'
import  {siteTitle} from '@/components/Layout'
import HeroSection from "@/components/HeroSection";
import SampleNews from "@/components/SampleNews";
import { getSortedPostsData } from '@/lib/posts'
import {GetStaticProps} from "next";
import React from "react";
import {getHomeData, getSortedHomeData} from "@/lib/home";

interface Post {
    title: string;
    date: string;
    id: string;
    image: string;
    author: string;
}
interface HeroData {
    title: string;
    introduction:string;
    contentHtml: string;
}
type Props = {
    allPostsData: Post[];
    heroData: HeroData
}

const Home =({allPostsData, heroData}:Props) => {
    return (
    <>
      <Head>
          <title>
              {siteTitle}
          </title>
      </Head>
        <section className='container mx-auto max-w-7xl px-6 lg:px-8 mb-10'>
            <HeroSection heroData={heroData} />
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
    const allHeroData = getSortedHomeData()
    const heroData = await getHomeData();

    return {
        props: {
            heroData,
            allHeroData,
            allPostsData,
        },
        revalidate: 10,
    }
}
