import styles from "../style"
import { cart, login, logo, message } from "../assets"

const Header = () => {
    return (
        <>
            <div className={styles.bannerFonts}>
                venta por caja exclusivamente
            </div>
            <header className="mb-2">
                <div className={styles.center}>

                    <div className="flex justify-between container ">
                        <img src={logo} alt="Logo" />
                        <nav className={styles.center}>
                            <ul className={styles.center}>
                                <li className={styles.navbarItems}>Vinos</li>
                                <li className={styles.navbarItems}>Espumantes</li>
                                <li className={styles.navbarItems}>Destilados</li>
                                <li className={styles.navbarItems}>Especiales</li>
                                <li className={styles.navbarItems}>Gift Card</li>
                            </ul>
                        </nav>
                        <div className={styles.center}>
                            <button><img src={login} alt="login" /></button>
                            <button><img src={cart} alt="cart" /></button>
                            <button><img src={message} alt="message" /></button>
                        </div>
                    </div>
                </div>
            </header>

        </>
    )
}

export default Header