import React from 'react'
import Link from 'next/link'
import {NewsArticle} from "@/components/index";

interface Post {
    title: string;
    date: string;
    id: string;
    image: string
}

type Props = {
    allPostsData: Post[];
}
const SampleNews = ({allPostsData}: Props) => {
    return (
      <div className="">
          <div className="container max-w-7xl sm:px-6 lg:px-8 mb-10">
              <h1 className="font-semibold text-4xl text-gray-700">
                  Latest
              </h1>
              <div className=" relative w-full grid grid-cols-1 md:grid-cols-3 gap-5 my-8">
                  {allPostsData.slice(0, 3).map((post) => (
                      <NewsArticle key={post.id} post={post} />
                  ))}

              </div>
              <div className='text-end'>
                  <Link href='posts/NewsArticles' className='text-[#f43f5e] hover:text-white hover:bg-[#f43f5e] px-6 py-2 border border-[#f43f5e] rounded-lg'>
                      More Articles
                  </Link>
              </div>
          </div>
      </div>
  )
}

export default SampleNews