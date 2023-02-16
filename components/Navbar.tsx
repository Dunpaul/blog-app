import React from 'react'
import Link from "next/link";
import {Bars4Icon} from "@heroicons/react/20/solid";
import {useRouter} from "next/router";

const Navbar = () => {
    const router = useRouter();
    const currentRoute = router.pathname;

    const toggler = () => {
        let nav_bar = document.getElementById('mobile-menu');
        // @ts-ignore
        if (nav_bar.className === 'hidden') {
            // @ts-ignore
             nav_bar.className += "sm:block"
         } else {
            // @ts-ignore
            nav_bar.className = "hidden"
         }
    }


    return(
        <nav className='bg-white'>
            <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between px-4">
                    <div className="absolute inset-y-0 right-2 flex items-center sm:hidden">
                    {/*Mobile menu button*/}
                        <button type="button" className="inline-flex items-center justify-center rounded-md p-2 text-[#f43f5e] hover:bg-[#f43f5e] hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#f43f5e]" aria-controls="mobile-menu" aria-expanded="false" onClick={toggler}>
                            <Bars4Icon className="h-7 w-7 " />
                        </button>
                    </div>
                    <div className="flex flex-1 items-center items-stretch justify-start md:justify-between">
                        <div>
                            <Link href='/' className="font-light italic text-3xl text-[#f43f5e]">
                                Our Blog
                            </Link>
                        </div>
                        <div className="hidden sm:ml-6 sm:block  justify-end" id="large-screen-menu">
                            <div className="flex space-x-4">

                                <Link href="/"
                                      className={currentRoute === '/' ? 'active-route' : 'text-gray-500 hover:bg-[#f43f5e] hover:text-white px-3 py-2 rounded-md text-sm font-medium'}
                                   aria-current="page">Home</Link>

                                <Link href="/about"
                                      className={currentRoute === '/about' ? 'active-route' : 'text-gray-500 hover:bg-[#f43f5e] hover:text-white px-3 py-2 rounded-md text-sm font-medium'}>About us</Link>

                                <Link href="/posts/NewsArticles"
                                   className={currentRoute === '/posts/NewsArticles' ? 'active-route' : 'text-gray-500 hover:bg-[#f43f5e] hover:text-white px-3 py-2 rounded-md text-sm font-medium'}>Articles</Link>

                                <Link href="/authors"
                                      className={currentRoute === '/authors' ? 'active-route' : 'text-gray-500 hover:bg-[#f43f5e] hover:text-white px-3 py-2 rounded-md text-sm font-medium'}>Authors</Link>

                                <Link href="/careers"
                                   className={currentRoute === '/careers' ? 'active-route' : 'text-gray-500 hover:bg-[#f43f5e] hover:text-white px-3 py-2 rounded-md text-sm font-medium'}>Careers</Link>


                            </div>
                        </div>
                    </div>
            </div>

            </div>

            <div className="hidden" id="mobile-menu">
                <div className="space-y-1 px-2 pb-3">
                    <Link href="/"
                          className={currentRoute === '/' ? 'bg-[#f43f5e] text-white block px-3 py-2 rounded-md text-base font-medium"' : "text-gray-500 hover:bg-[#f43f5e] hover:text-white block px-3 py-2 rounded-md text-base font-medium"}
                          aria-current="page">
                        Home
                    </Link>

                    <Link href="/about"
                          className={currentRoute === '/about' ? 'bg-[#f43f5e] text-white block px-3 py-2 rounded-md text-base font-medium"' : "text-gray-500 hover:bg-[#f43f5e] hover:text-white block px-3 py-2 rounded-md text-base font-medium"}>
                        About Us
                    </Link>

                    <Link href="/posts/NewsArticles"
                          className={currentRoute === '/posts/NewsArticles' ? 'bg-[#f43f5e] text-white block px-3 py-2 rounded-md text-base font-medium"' : "text-gray-500 hover:bg-[#f43f5e] hover:text-white block px-3 py-2 rounded-md text-base font-medium"}>
                        Articles
                    </Link>

                    <Link href="/authors"
                          className={currentRoute === '/authors' ? 'bg-[#f43f5e] text-white block px-3 py-2 rounded-md text-base font-medium"' : "text-gray-500 hover:bg-[#f43f5e] hover:text-white block px-3 py-2 rounded-md text-base font-medium"}>
                        Authors
                    </Link>

                    <Link href="/careers"
                          className={currentRoute === '/careers' ? 'bg-[#f43f5e] text-white block px-3 py-2 rounded-md text-base font-medium"' : "text-gray-500 hover:bg-[#f43f5e] hover:text-white block px-3 py-2 rounded-md text-base font-medium"}>
                        Careers
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
