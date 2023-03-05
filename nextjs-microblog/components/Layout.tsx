import Head from "next/head";
import { ReactNode } from "react";

import styles from "./layout.module.css";
import utilsStyles from "../styles/utils.module.css";
import Link from "next/link";

const name = "Shin Code";
export const siteTitle = "Next.js blog";

type Props = {
    children: ReactNode;
    home: boolean;
};

function Layout(props: Props) {
    const { children, home } = props;
    return (
        <div className={styles.container}>
            <Head>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <header className={styles.header}>
                {home ? (
                    <>
                        <img
                            className={`${utilsStyles.borderCircle} ${styles.headerHomeImage}`}
                            src="/images/profile.png"
                        />
                        <h1 className={utilsStyles.heading2Xl}>{name}</h1>
                    </>
                ) : (
                    <>
                        <img
                            className={utilsStyles.borderCircle}
                            src="/images/profile.png"
                        />
                        <h1 className={utilsStyles.heading2Xl}>{name}</h1>
                    </>
                )}
            </header>
            <main>{children}</main>
            {!home && (
                <div><Link href="/">← ホームへ戻る</Link></div>
            )}
        </div>
    );
}

export default Layout;
