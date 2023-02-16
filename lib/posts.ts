import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import {remark} from 'remark'
import html from 'remark-html'
import remarkParse from "remark-parse";

//get the location of where the files are stored
const postsDirectory = path.join(process.cwd(), 'posts')

// console.log(postsDirectory)

// fetching and sorting the post data
export function getSortedPostsData() {
//    Get the file names
    const fileNames = fs.readdirSync(postsDirectory);
    const allPostsData = fileNames.map((fileName) => {
        //remove the '.md' extension from the file name to get id
        const id = fileName.replace(/\.md$/, '')

        //read the markdown file as a string
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');


        //    parse the post metadata section
        const matterResult = matter(fileContents);
        //    combine the data with the id
        return {
            id,
            ...(matterResult.data as {date: string; title: string; image:string; author: string})
        };
    });

    // sort the posts by their dates
    return allPostsData.sort((a,b) => {
        if (a.date < b.date) {
            return 1;
        } else {
            return -1
        }
    });
}

export function getAllPostIds() {
    const fileNames = fs.readdirSync(postsDirectory)

    return fileNames.map((fileName) => {
        return {
            params: {
                id: fileName.replace(/\.md$/, ''),
            },
        };
    })
}

export async function getPostData(id:string) {
    const fullPath = path.join(postsDirectory, `${id}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents)

    // Use remark to convert markdown into HTML string
    const processedContent = await remark()
        .use(remarkParse)
        .use(html)
        .process(matterResult.content)
    const contentHtml = processedContent.toString()

    // Combine the data with the id and contentHtml
    return {
        id,
        contentHtml,
        ...(matterResult.data as { date: string; title: string; image:string; author:string })
    }
}
