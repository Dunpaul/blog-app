import {getAllPostIds, getPostData} from "@/lib/posts";
import Date from '../../components/date'
import Head from "next/head";
import {GetStaticProps, GetStaticPaths} from "next";
import {UserCircleIcon} from "@heroicons/react/20/solid";

interface Post {
    title: string;
    date: string;
    contentHtml: string;
    image: string;
    author: string;
}
type Props = {
    postData: Post;
}

const Post = ({ postData }: Props) => {
    return (
        <div>
            <Head>
                <title>
                    {postData.title}
                </title>
            </Head>
            <section className="mx-auto max-w-7xl px-6 lg:px-8 mb-10 pt-8">
                <article>
                    <h1 className="font-semibold text-4xl text-center text-gray-700 mb-6">{postData.title}</h1>
                    <p className="font-bold text-end text-gray-500 mb-3">
                        <Date dateString={postData.date} />
                    </p>
                    <div className="h-96 relative mb-6">
                        <img src={postData.image} className="w-full h-full rounded-lg" alt=""/>
                    </div>
                    <div className="blog-content" dangerouslySetInnerHTML={{__html: postData.contentHtml}} />
                    <div>
                        <p className="text-2xl text-gray-600">
                            <UserCircleIcon className="text-gray-700 h-12 " />
                           By {postData.author}
                        </p>
                    </div>
                </article>
            </section>
        </div>
    )
}

export default Post;

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = getAllPostIds()
    return {
        paths,
        fallback: false
    }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const postData = await getPostData(params?.id as string)
    return {
        props: {
            postData
        }
    }
}