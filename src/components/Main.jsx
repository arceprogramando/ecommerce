import Carousel from "./Carousel"
import ItemListContainer from "./ItemListContainer/ItemListContainer"
import ShippingInfo from "./ShippingInfo"

const Main = () => {
    return (
        <>
            <main >
                <Carousel />
                <ShippingInfo />
                <ItemListContainer />
            </main>
        </>
    )
}

export default Main