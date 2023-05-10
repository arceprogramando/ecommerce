import { box, creditcard, truck } from "../assets"
import styles from "../style"
const ShippingInfo = () => {
    return (
        <>
            <div className="flex justify-center">

                <div className="flex justify-between max-w-7xl" >
                    <div className={styles.shippingItems}>
                        <i className={styles.shippingIcon}><img src={box} alt="envio a todo el pais" /></i>
                        <h3 className={styles.shippingText}>Envío a todo el país</h3>

                    </div>
                    <div className={styles.shippingItems} >
                        <i className={styles.shippingIcon} ><img src={creditcard} alt="tarjetas de credito" /></i>
                        <h3 className={styles.shippingText}>Paga con todas <br /> tus tarjetas</h3>

                    </div>
                    <div className={styles.shippingItems}>
                        <i className={styles.shippingIcon}><img src={truck} alt="envios gratis superando compras" /></i>
                        <h3 className={styles.shippingText}>Envío gratis a CABA con compras mayores a 8000</h3>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ShippingInfo