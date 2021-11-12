import Link from 'next/link'
import headerStyles from './header.module.css'

export default function Header(){
    return (
        <div className={headerStyles.header_container}>
            <div className={headerStyles.hamburger_menu_container}>
                <span className={headerStyles.hamburger_line}></span>
                <span className={headerStyles.hamburger_line}></span>
                <span className={headerStyles.hamburger_line}></span>
            </div>
            <Link href="/" passHref>
                <h1>CapEx</h1>
            </Link>
            {/* <span>Page Title</span> */}
        </div>
    );
}