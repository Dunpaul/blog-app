import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import {remark} from 'remark'
import html from 'remark-html'
import remarkParse from "remark-parse";

//get the location of where the files are stored
const aboutDirectory =  path.join(process.cwd(), 'about');

// console.log(aboutDirectory)

// fetch about meta-data
export function getSortedAboutData() {
    // get the file name
    const fileNames = fs.readdirSync(aboutDirectory);
    // read the data
    // return the about page data
    // console.log(fileNames)
    return fileNames.map((fileName) => {
        // remove the '.md' extension from the file to get the id
        const id = fileName.replace(/\.md$/, '');

        // read the markdown file as a string
        const fullPath = path.join(aboutDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');

        // parse the about meta-data section
        const matterResult = matter(fileContents);

        // combine the data with the id
        return {
            id,
            ...(matterResult.data as { title: string; date:string; image: string; })
        }
    })
}

// fetch the file id
export function getAboutId() {
    const fileNames = fs.readdirSync(aboutDirectory)
     return fileNames.map((fileName) => {
         return {
             params: {
                 id: fileName.replace(/\.md$/, ''),
             },
         };
     });
}

export async function getAboutData () {
    let filename= 'about.md';
    let id = 'about'
    const fullPath = path.join(aboutDirectory, filename);
    console.log(fullPath)
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
        ...(matterResult.data as {title: string; image: string})
    }
}
