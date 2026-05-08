// filesystem
import filesystem from 'fs';
import path from 'path';
import grayMatter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

// (current working directory)/posts
const postsDirectory = path.join(process.cwd(), 'posts');

export function getSortedPostsData() {

    const fileNames = filesystem.readdirSync(postsDirectory);
    const allPostsData = fileNames.map(fileName => {
        // regex seeks ".md" at the very end of a filename, to be deleted from it
        const id = fileName.replace(/\.md$/, '');

        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = filesystem.readFileSync(fullPath, 'utf8');

        const markdownResult = grayMatter(fileContents);

        return {
            id,
            ...markdownResult.data
        }
    });

    return allPostsData.sort((a, b) => {
        if (a.date < b.date) {
            return 1;
        } else {
            return 0;
        }
    });
}

export function getAllPostIds() {
    const fileNames = filesystem.readdirSync(postsDirectory);

    return fileNames.map(fileName => {
        return {
            params: {
                id: fileName.replace(/\.md$/, '')
            }
        };
    });
}

export async function getPostData(id) {
    const fullPath = path.join(postsDirectory, `${id}.md`);
    const fileContents = filesystem.readFileSync(fullPath, 'utf-8');

    const markdown = grayMatter(fileContents);

    const htmlContent = await remark()
        .use(html)
        .process(markdown.content)
    ;

    return {
        id,
        htmlContent: htmlContent.toString(),
        ...markdown.data
    };
}
