import mobileMenuStyles from './mobile_menu.module.css'

export default function MobileMenu(){
    return(
        <div className={mobileMenuStyles.mobile_menu_container}>
            <h2>Mobile Menu</h2>
            <div className={mobileMenuStyles.menu_item_container}>
                <span>Properties</span>
                <span>Projects</span>
                <span>Metrics</span>
            </div>
        </div>
    );
}