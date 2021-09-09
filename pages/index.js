import Head from 'next/head'
import styles from '../styles/Home.module.scss'

/**
 * * Components
 */
import CardList from "../components/CardList";


export default function Home() {

  return (
    <div>
      <Head>
        <title>Cards</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.container}>
        <CardList />
      </main>

      <footer className={styles.footer}>
        <a
          href="https://lvidal.pe"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by Leonardo Vidal
        </a>
      </footer>
    </div>
  )
}
