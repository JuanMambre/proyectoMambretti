import React from 'react';

const ItemDetail = ({ titulo, imagen, descripcion, stock }) => {
  return (
    <section className="bg-gray-800 text-white min-h-screen flex items-center justify-center">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <img
              className="w-full h-auto rounded-lg mb-2.5"
              src={imagen}
              alt={`${titulo}-image`}
            />
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{titulo}</h2>
            <p className="text-xl mb-8">{descripcion}</p>
            <div className="flex items-center mb-4">
              <span className="text-xl font-bold">Stock:</span>
              <span className="ml-2">{stock}</span>
            </div>
            <button className="bg-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-purple-500 transition duration-300">Add to Cart</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ItemDetail;


