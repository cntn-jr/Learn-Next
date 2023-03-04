import Layout from "@/components/Layout";
import Link from "next/link";
import utilStyle from "../styles/utils.module.css";
import styles from "../styles/Home.module.css";

export default function Home() {
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
                    <article>
                        <Link href="/">
                            <img
                                className={styles.thumbnailImage}
                                src="/images/thumbnail01.jpg"
                                alt=""
                            />
                        </Link>
                        <Link href="/">
                            <span className={utilStyle.boldText}>
                                SSGとSSRの使い分けの場面はいつなのか？
                            </span>
                        </Link>
                        <br />
                        <small className={utilStyle.lightText}>
                            February 23, 2023
                        </small>
                    </article>
                    <article>
                        <Link href="/">
                            <img
                                className={styles.thumbnailImage}
                                src="/images/thumbnail01.jpg"
                                alt=""
                            />
                        </Link>
                        <Link href="/">
                            <span className={utilStyle.boldText}>
                                SSGとSSRの使い分けの場面はいつなのか？
                            </span>
                        </Link>
                        <br />
                        <small className={utilStyle.lightText}>
                            February 23, 2023
                        </small>
                    </article>
                    <article>
                        <Link href="/">
                            <img
                                className={styles.thumbnailImage}
                                src="/images/thumbnail01.jpg"
                                alt=""
                            />
                        </Link>
                        <Link href="/">
                            <span className={utilStyle.boldText}>
                                SSGとSSRの使い分けの場面はいつなのか？
                            </span>
                        </Link>
                        <br />
                        <small className={utilStyle.lightText}>
                            February 23, 2023
                        </small>
                    </article>
                    <article>
                        <Link href="/">
                            <img
                                className={styles.thumbnailImage}
                                src="/images/thumbnail01.jpg"
                                alt=""
                            />
                        </Link>
                        <Link href="/">
                            <span className={utilStyle.boldText}>
                                SSGとSSRの使い分けの場面はいつなのか？
                            </span>
                        </Link>
                        <br />
                        <small className={utilStyle.lightText}>
                            February 23, 2023
                        </small>
                    </article>
                </div>
            </section>
        </Layout>
    );
}
