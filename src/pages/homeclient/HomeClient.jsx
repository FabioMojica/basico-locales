import Menu from "./components/Menu"
import Order from "./components/Order"
import RestaurantCarousel from "./components/RestaurantGallery"

const HomeClient = () => {
  return (
    <>
    <RestaurantCarousel></RestaurantCarousel>
    <Menu></Menu>
    <Order></Order>
    </>
  )
}

export default HomeClient
