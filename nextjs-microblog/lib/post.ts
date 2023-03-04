import path from "path";
import fs from "fs";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "posts");
console.log(`postsDirectory: ${postsDirectory}`);

// mdファイルのデータを取り出す
export function getPostsData() {
    const fileNames = fs.readdirSync(postsDirectory);
    console.log(`fileNames: ${fileNames}`);

    const allPostsData= fileNames.map((filename) => {
        const id = filename.replace(/\.md$/, ""); // ファイル名（id）

        // マークダウンファイルを文字列として読み取る
        const fullPath = path.join(postsDirectory, filename);
        const fileContents = fs.readFileSync(fullPath, "utf-8");

        const matterResult = matter(fileContents);

        // idとデータを返す
        return {
            id,
            ...matterResult.data,
        };
    });

    return allPostsData;
}
