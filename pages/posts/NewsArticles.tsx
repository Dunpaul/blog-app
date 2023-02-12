import React from 'react'
import {GetStaticProps} from "next";
import {getSortedPostsData} from "@/lib/posts";
import {NewsArticle} from "@/components";
import Head from "next/head";


interface Post {
    title: string;
    date: string;
    id: string;
    image: string;
}

type Props = {
    allPostsData: Post[];
}


const NewsArticles = ({allPostsData}: Props) => {
    return (
        <>
            <Head>
                <title>
                    Articles
                </title>
            </Head>
            <section className="mx-auto max-w-7xl px-6 lg:px-8 pt-8">
                <h1 className="font-bold text-4xl text-gray-700">All Articles</h1>
                <div className=" relative w-full grid grid-cols-1 md:grid-cols-3 gap-5 my-8">
                    {allPostsData.map((post) => (
                        <NewsArticle key={post.id} post={post} />
                    ))}

                </div>
            </section>
        </>
    )
}

export default NewsArticles;

export const getStaticProps: GetStaticProps = async () => {
    const allPostsData = getSortedPostsData();
    return {
        props: {
            allPostsData,
        },
        revalidate: 10,
    }
}