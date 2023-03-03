import Head from "next/head";
import { ReactNode } from "react";

import styles from "./layout.module.css";
import utilsStyles from "../styles/utils.module.css";

const name = "Shin Code";
export const siteTitle = "Next.js blog";

type Props = {
    children: ReactNode;
};

function Layout(props: Props) {
    const { children } = props;
    return (
        <div className={styles.container}>
            <Head>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <header className={styles.header}>
                <img
                    className={utilsStyles.borderCircle}
                    src="/images/profile.png"
                />
                <h1 className={utilsStyles.heading2Xl}>{name}</h1>
            </header>
            <main>{children}</main>
        </div>
    );
}

export default Layout;
