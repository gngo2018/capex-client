import Link from 'next/link'
import mobileMenuStyles from './mobile_menu.module.css'

interface MobileMenuProps{
    isOpen: (e: boolean) => void
}

export default function MobileMenu(props: MobileMenuProps) {
    return (
        <div className={mobileMenuStyles.mobile_menu_container}>
            <h2>Mobile Menu</h2>
            <div className={mobileMenuStyles.menu_item_container}>
                <span> <a>Sign In</a> | <a>Join</a></span>
                <Link href={'/properties'}>
                    <span onClick={() => props.isOpen(false)}>Properties</span>
                </Link>
                <Link href={'/projects'}>
                    <span onClick={() => props.isOpen(false)}>Projects</span>
                </Link>
                <Link href={'/metrics'}>
                    <span onClick={() => props.isOpen(false)}>Metrics</span>
                </Link>
            </div>
        </div>
    );
}