import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import Head from 'next/head';

import { getSortedPostsData, getPostData} from '@/lib/posts'

type AboutPageData = {
    id: string;
    title: string;
    image: string;
};

type AboutProps = InferGetStaticPropsType<typeof getStaticProps>;

export default function About({ aboutData }: AboutProps) {
    return (
        <>
            <Head>
                <title>{aboutData.title}</title>
            </Head>
            <div>
                <h1 className="text-4xl font-medium">{aboutData.title}</h1>
                <img src={aboutData.image} alt={aboutData.title} />
            </div>
        </>
    );
}

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = getSortedPostsData().map((aboutData: AboutPageData) => ({
        params: { id: aboutData.id },
    }));

    return {
        paths,
        fallback: false,
    };
};

export const getStaticProps: GetStaticProps<{ aboutData: AboutPageData }> =
    async ({ params }) => {
        const aboutData = await getPostData(params?.id as string);
        return {
            props: {
                aboutData,
            },
        };
    };
