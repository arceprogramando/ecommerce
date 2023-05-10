import styles from "../style"
import { cart, login, logo, message } from "../assets"
import Carousel from "./Carrousel"
const Header = () => {
    return (
        <>
            <header >
                <div className={styles.bannerFonts}>
                    venta por caja exclusivamente
                </div>
                <div className={styles.center}>

                    <div className="flex justify-between container ">
                        <img src={logo} alt="Logo" />
                        <nav className={styles.center}>
                            <ul className={styles.center}>
                                <li className="">Vinos</li>
                                <li className="">Espumantes</li>
                                <li className="">Destilados</li>
                                <li className="">Especiales</li>
                                <li className="">Gift Card</li>
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
            <Carousel />
        </>
    )
}

export default Header