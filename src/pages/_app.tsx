
import type { AppProps } from 'next/app'
import { Header } from '../components/header'
import { GlobalStyles } from '../styles/globals.styles'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Component {...pageProps} />
    </>
  )
}
