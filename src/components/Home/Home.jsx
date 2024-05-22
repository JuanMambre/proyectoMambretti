import React from 'react';
import { Link } from 'react-router-dom';
import { FaLongArrowAltRight } from 'react-icons/fa';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-800 to-black text-white flex flex-col items-center justify-center py-8">
      <h1 className="text-4xl sm:text-6xl font-bold mb-8 mt-10">Bienvenido a InnovaTech</h1>
      
      <div className="w-full max-w-lg mx-auto mb-8">
        <Carousel
          showThumbs={false}
          autoPlay={true}
          infiniteLoop={true}
          showStatus={false}
          interval={5000}
        >
          <div className="flex justify-center items-center">
            <img className="h-70 w-auto" src="src/assets/products-img/intel-i7.jpg" alt="Intel Core i7" />
            <p className="legend">Procesador Intel Core i7</p>
          </div>
          <div className="flex justify-center">
            <img className="h-70 w-auto" src="src/assets/products-img/Tarjeta-Madre-ASUS-ROG.jpg" alt="Tarjeta Madre ASUS ROG" />
            <p className="legend">Tarjeta Madre ASUS ROG</p>
          </div>
          <div className="flex justify-center">
            <img className="h-70 w-auto" src="src/assets/products-img/Tarjeta-de-Video-NVIDIA-GeForce-RTX-3080.jpg" alt="Tarjeta de Video NVIDIA GeForce RTX 3080" />
            <p className="legend">Tarjeta de Video NVIDIA GeForce RTX 3080</p>
          </div>
        </Carousel>
      </div>
      
      <div className="text-center max-w-2xl mx-auto mb-8 px-4">
        <p className="text-xl sm:text-2xl">
          ¡Bienvenido a InnovaTech! Somos una empresa dedicada a ofrecer lo último en tecnología. Explora nuestra tienda para encontrar productos innovadores que harán tu vida más fácil y emocionante.
        </p>
      </div>
      
        <div>
            <Link to='/shop' smooth duration={500} className=' group text-white w-fit px-6 p-3 my-2 flex items-center rounded-md bg-gradient-to-r from-violet-300 to-violet-700 cursor-pointer '> 
               Shop Now
                    <span className=' group-hover:rotate-90 duration-300 ml-3  '>
                        <FaLongArrowAltRight/>
                    </span> 
            </Link>
        </div>
    </div>
  );
};

export default Home;



