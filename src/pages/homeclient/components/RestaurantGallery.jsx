import { useState, useEffect } from "react";

const RestaurantCarousel = () => {
  const images = [
    { path: '/images/principal.jpg', text: 'Sabor Único'},
    { path: '/images/principal1.jpg', text: 'Una Explosión En Tu Boca'},
    { path: '/images/principal2.jpg', text: 'Ven y pruebala'}
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Cambiar la imagen cada 3 segundos
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 7000); // Cambia cada 3000ms (3 segundos)

    return () => clearInterval(intervalId);
  }, [images.length]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative w-full h-[90vh] overflow-hidden">
      <img
        src={images[currentIndex].path}
        alt="Restaurant"
        className="w-full h-full object-cover"
      />
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white bg-black p-2 rounded-full"
      >
        &#10094;
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white bg-black p-2 rounded-full"
      >
        &#10095;
      </button>
    </div>
  );
};

export default RestaurantCarousel;
