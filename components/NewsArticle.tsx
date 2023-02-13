import React from 'react'
import Link from "next/link";
import {GetStaticPaths, GetStaticProps} from "next";
import {getAllPostIds, getPostData} from "@/lib/posts";

interface Post {
    title: string;
    date: string;
    id: string;
    image: string;
}

type Props = {
    post: Post;
}

const NewsArticle = ({post}: Props) => {
    return (
        <Link href={`/posts/${post.id}`}>
            <div className="h-full relative shadow-lg rounded-lg">
                <div className="h-60">
                    <img
                        src={post.image}
                        alt=""
                        className="w-full h-full rounded-t-lg"
                    />
                </div>
                <div className="relative py-3 px-2">
                    <h3 className='font-semibold text-2xl text-center text-gray-700' key={post.id}>{post.title}</h3>
                </div>
            </div>
        </Link>
    )
}

export default NewsArticle

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = getAllPostIds();
    return {
        paths,
        fallback: false,
    };
}

export const getStaticProps: GetStaticProps = async ({params}) => {
    const postData = await getPostData(params?.id as string)
    return {
        props: {
            postData,
        },
    };
}