import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Header from '../components/layout/Header'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <div className="body_padding">
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp
