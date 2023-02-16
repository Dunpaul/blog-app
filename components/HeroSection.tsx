import React from 'react'

interface HeroData {
    title: string;
    introduction:string;
    contentHtml: string;
}
type Props = {
    heroData : HeroData
}
const HeroSection = ({heroData}: Props) => {
    return (
        <div className="">
            <div className="text-center container pt-10 md:pt-24 pb-16 mb-5 max-w-7xl">
                <h6 className="text-3xl font-medium">{heroData.title}</h6>
                <h1
                    className="text-6xl font-bold mt-8"
                    dangerouslySetInnerHTML={{__html:heroData.contentHtml}}
                />
                <p className="text-lg text-slate-500 mt-6">{heroData.introduction}</p>
            </div>
        </div>
    )
}

export default HeroSection