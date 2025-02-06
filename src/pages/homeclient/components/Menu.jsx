import { Link } from "react-router-dom";

const Menu = () => {
  const items = [
    {
      name: "Hamburguesa",
      description: "Deliciosa hamburguesa con queso",
      price: "$5",
      image: "/images/principal1.jpg",
    },
    {
      name: "Pizza",
      description: "Pizza con ingredientes frescos",
      price: "$8",
      image: "/images/principal1.jpg",
    },
    {
      name: "Ensalada",
      description: "Ensalada fresca con aderezos",
      price: "$4",
      image: "/images/principal1.jpg",
    },
    {
      name: "Bebida",
      description: "Refrescos y jugos",
      price: "$2",
      image: "/images/principal1.jpg",
    },
    {
      name: "Papas Fritas",
      description: "Papas crujientes con salsa",
      price: "$3",
      image: "/images/principal1.jpg",
    },
    {
      name: "Taco",
      description: "Taco con carne y salsa",
      price: "$6",
      image: "/images/principal1.jpg",
    },
    {
      name: "Hot Dog",
      description: "Hot dog con ketchup y mostaza",
      price: "$4",
      image: "/images/principal1.jpg",
    },
    {
      name: "Sopa",
      description: "Sopa de pollo casera",
      price: "$3.5",
      image: "/images/principal1.jpg",
    },
  ];

  return (
    <section id='menu' className="bg-black p-2 ">
      <h2 className="text-5xl font-bold mb-4 text-white flex items-center justify-center h-[20vh] space-x-2">
        <span>Nuestro</span>
        <span className="text-orange-500">Menú</span>
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {items.map((item, index) => (
          <a href="#order" className="bg-gray-200 p-4 rounded-lg text-center" key={index}>
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-40 object-cover rounded-lg mb-2"
            />
            <h3 className="text-xl font-semibold">{item.name}</h3>
            <p className="text-gray-700">{item.description}</p>
            <span className="text-lg font-bold">{item.price}</span>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Menu;
