import { useState } from 'react'
import { createContext, useContext } from "react"
import Link from 'next/link'
import MobileMenu from '../mobile_menu/MobileMenu'
import headerStyles from './header.module.css'

export type MobileMenu = {
  isOpen: boolean,
  setIsOpen:(e: boolean) => void
}

export const MobileMenuContext = createContext<MobileMenu>({
    isOpen: true,
    setIsOpen: () => {}
})

export const useMobileMenuContext = () => useContext(MobileMenuContext)
interface HeaderProps{
    isOpen: (e: boolean) => void
}
export default function Header(props: HeaderProps) {
    const [menuIsOpen, setMenuIsOpen] = useState(false);
    
    function handleMenuOnClick(){
        setMenuIsOpen(!menuIsOpen);
        props.isOpen(menuIsOpen);
    }

    return (
        <MobileMenuContext.Provider value={{isOpen: menuIsOpen, setIsOpen: setMenuIsOpen}}>
            <div className={headerStyles.header_container}>
                <div onClick={() => handleMenuOnClick()} className={headerStyles.hamburger_menu_container}>
                    <span className={headerStyles.hamburger_line}></span>
                    <span className={headerStyles.hamburger_line}></span>
                    <span className={headerStyles.hamburger_line}></span>
                </div>
                <Link href="/" passHref>
                    <h1>CapEx</h1>
                </Link>
            </div>
        </MobileMenuContext.Provider>
    );
}