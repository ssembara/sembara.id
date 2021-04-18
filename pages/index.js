import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Sebastianus Sembara</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Hi, Sembara Here!
        </h1>

        <p className={styles.description}>
          I’m a software developer based in Surabaya, Indonesia.
          With a greatest passion on web technologies
        </p>

        <p className={styles.description}>
          Get in touch via email at <a href="mailto:sembara9090@gmail.com">sembara9090@gmail.com</a>
        </p>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
