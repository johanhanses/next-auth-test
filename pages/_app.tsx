import '../styles/globals.css'
import { SessionProvider } from 'next-auth/react'
import { LoginButton } from '../components/LoginButton'
import styles from '../styles/Home.module.css'
import type { AppProps } from 'next/app'
import Link from 'next/link'

export default function MyApp({
  Component,
  pageProps: { session, ...pageProps }
}: AppProps) {
  return (
    <SessionProvider session={session}>
      <header>
        <LoginButton />
        <Link href="/">
          <a style={{ marginLeft: '2rem' }}>Home</a>
        </Link>
        <Link href="/about">
          <a style={{ marginLeft: '2rem' }}>About</a>
        </Link>
      </header>

      <div className={styles.container}>
        <main className={styles.main}>
          <Component {...pageProps} />
        </main>
      </div>
    </SessionProvider>
  )
}
