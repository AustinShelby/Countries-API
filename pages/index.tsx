import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Countries API</title>
        <meta name="description" content="Countries API" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to Countries API</h1>

        <p className={styles.description}>
          Get started by expoloring all the countries
          <code className={styles.code}>
            <Link href={"/countries"}>
              <a style={{ color: "blue" }}>/countries</a>
            </Link>
          </code>
        </p>

        <div className={styles.grid}>
          <Link href={"/countries/br"}>
            <a className={styles.card}>
              <h2>Brazil &rarr;</h2>
              <code className={styles.code}>/countries/br</code>
            </a>
          </Link>
          <Link href={"/countries/fi"}>
            <a className={styles.card}>
              <h2>Finland &rarr;</h2>
              <code className={styles.code}>/countries/fi</code>
            </a>
          </Link>
          <Link href={"/countries/kn"}>
            <a className={styles.card}>
              <h2>St. Kitts and Nevis &rarr;</h2>
              <code className={styles.code}>/countries/kn</code>
            </a>
          </Link>
          <Link href={"/countries/tw"}>
            <a className={styles.card}>
              <h2>Taiwan &rarr;</h2>
              <code className={styles.code}>/countries/tw</code>
            </a>
          </Link>
        </div>
      </main>

      <footer className={styles.footer}>
        <a href="https://www.austinshelby.com/" target="_blank">
          Powered by Austin Shelby
        </a>
      </footer>
    </div>
  );
};

export default Home;
