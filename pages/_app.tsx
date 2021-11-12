import { useEffect, useState } from 'react'
import type { AppProps } from 'next/app'
import { useMobileMenuContext } from '../components/layout/Header'
import Header from '../components/layout/Header'
import MobileMenu from '../components/mobile_menu/MobileMenu'
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  // const { isOpen, setIsOpen } = useMobileMenuContext();
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const updateIsOpen = (e: boolean):void => {
    setMenuIsOpen(!e);
}

  return (
    <>
      <Header isOpen={updateIsOpen}/>
      {
        menuIsOpen &&
        <MobileMenu />
      }
      {
        !menuIsOpen &&
        <div className="body_padding">
          <Component {...pageProps} />
        </div>
      }
    </>
  );
}

export default MyApp
