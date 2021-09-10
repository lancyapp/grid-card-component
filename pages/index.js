import Head from 'next/head'
import styles from '../styles/Home.module.scss'

/**
 * * Components
 */
import Hero from '../src/components/Hero'
import CardList from '../src/components/CardList'

import { FilterProvider } from '../src/contexts/FilterContext'
import BackgroundImage from '../src/components/BackgroundImage'

export default function Home() {
	return (
		<div>
			<Head>
				<title>Cards</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<BackgroundImage />
			<main className="container-md relative z-5">
				<Hero />
				<FilterProvider>
					<CardList />
				</FilterProvider>
			</main>

			<footer className={styles.footer}>
				<a href="https://lvidal.pe" target="_blank" rel="noopener noreferrer">
					Powered by Leonardo Vidal
				</a>
			</footer>
		</div>
	)
}
