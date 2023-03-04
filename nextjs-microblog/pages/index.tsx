import Layout from "@/components/Layout";
import Link from "next/link";
import utilStyle from "../styles/utils.module.css";
import styles from "../styles/Home.module.css";
import { getPostsData } from "../lib/post";
import { GetStaticProps } from "next";

// SSGの場合
export const getStaticProps: GetStaticProps = async () => {
    const allPostsData = getPostsData();
    console.log(allPostsData);

    return {
        props: {
            allPostsData: getPostsData(),
        },
    };
};

export default function Home({ allPostsData }: any) {
    console.log(`allPostsData id: ${allPostsData[0].id}`);
    console.log(`allPostsData title: ${allPostsData[0].title}`);
    console.log(`allPostsData date: ${allPostsData[0].date}`);
    console.log(`allPostsData thumbnail: ${allPostsData[0].thumbnail}`);

    return (
        <Layout>
            <section className={utilStyle.headingMd}>
                <p>
                    私は見習いバックエンドエンジニアです/Udemyで勉強中です/好きな言語はPHPとJavascriptです
                </p>
            </section>

            <section
                className={`${utilStyle.headingMd} ${utilStyle.padding1px}`}
            >
                <h2>🧑🏻‍💻エンジニアのブログ</h2>
                <div className={styles.grid}>
                    {allPostsData.map((postsData: any) => (
                        <article key={postsData.id}>
                            <Link href={`/posts/${postsData.id}`}>
                                <img
                                    className={styles.thumbnailImage}
                                    src={`${postsData.thumbnail}`}
                                    alt=""
                                />
                            </Link>
                            <Link href={`/posts/${postsData.id}`}>
                                <span className={utilStyle.boldText}>
                                    {postsData.title}
                                </span>
                            </Link>
                            <br />
                            <small className={utilStyle.lightText}>
                                {postsData.date}
                            </small>
                        </article>
                    ))}
                </div>
            </section>
        </Layout>
    );
}
