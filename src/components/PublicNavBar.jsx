import { Link } from "react-router-dom"

const PublicNavBar = () => {
  return (
    <nav className="flex justify-around">
        <Link>Menú</Link>
        <Link>Sucursales</Link>
        <Link>Pedir</Link>
    </nav> 
  )
}

export default PublicNavBar
