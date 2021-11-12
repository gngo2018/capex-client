import { useEffect, useState } from 'react'
import type { AppProps } from 'next/app'
import { useMobileMenuContext } from '../components/layout/Header'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import Header from '../components/layout/Header'
import MobileMenu from '../components/mobile_menu/MobileMenu'
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  // const { isOpen, setIsOpen } = useMobileMenuContext();
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const updateIsOpen = (e: boolean): void => {
    console.log(menuIsOpen);
    setMenuIsOpen(!menuIsOpen);
  }

  const closeMenu = (e: boolean): void => {
    setMenuIsOpen(false);
  }

  library.add(faPlusCircle);

  return (
    <>
      <Header isOpen={updateIsOpen} />
      {
        menuIsOpen &&
        <MobileMenu isOpen={closeMenu} />
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
