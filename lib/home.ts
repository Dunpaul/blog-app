import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import {remark} from 'remark';
import html from 'remark-html';
import remarkParse from "remark-parse";

//get the location of where the fie is stored
const homeDirectory =  path.join(process.cwd(), 'home');


// fetch home meta-data
export function getSortedHomeData() {
    // get the file name
    const fileNames = fs.readdirSync(homeDirectory);
    // read the data
    // return the about page data
    return fileNames.map((fileName) => {
        // remove the '.md' extension from the file to get the id
        const id = fileName.replace(/\.md$/, '');

        // read the markdown file as a string
        const fullPath = path.join(homeDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');

        // parse the home meta-data section
        const matterResult = matter(fileContents);

        // combine the data with the id
        return {
            id,
            ...(matterResult.data as { title: string; introduction: string; })
        }
    })
}

// fetch the file id
export function getHomeId() {
    const fileNames = fs.readdirSync(homeDirectory)
    return fileNames.map((fileName) => {
        return {
            params: {
                id: fileName.replace(/\.md$/, ''),
            },
        };
    });
}

export async function getHomeData () {
    let filename= 'hero.md';
    let id = 'hero'
    const fullPath = path.join(homeDirectory, filename);
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // use gray-matter to parse the home meta-data section
    const matterResult = matter(fileContents);

    // use remark to convert markdown to html
    const processedContent = await remark()
        .use(remarkParse)
        .use(html)
        .process(matterResult.content)

    const contentHtml = processedContent.toString()

    // combine the data with id an contentHtml
    return {
        id,
        contentHtml,
        ...(matterResult.data as {title: string; introduction: string})
    }
}
