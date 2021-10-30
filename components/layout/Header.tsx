import Link from 'next/link'
import headerStyles from './header.module.css'

export default function Header(){
    return (
        <div className={headerStyles.header_container}>
            <Link href="/">
                <h2>CapEx</h2>
            </Link>
            {/* <span>Page Title</span> */}
        </div>
    );
}