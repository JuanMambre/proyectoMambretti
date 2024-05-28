import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProduct } from '../../../asyncMock';

const ItemDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const prod = getProduct(id);
    setProduct(prod);
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 py-10">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4">
        <div className="bg-gray-800 rounded-lg shadow-md p-5 mb-5 transition-transform duration-300 ease-in-out hover:transform hover:-translate-y-1">
          <img
            className="w-full h-auto rounded-lg mb-2.5"
            src={product.imagen}
            alt={`${product.titulo}-image`}
          />
          <div className="text-center">
            <h2 className="text-sm mb-5">{product.titulo}</h2>
            <p className="text-xs text-gray-400 mb-2.5">{product.descripcion}</p>
            <span className="text-xs text-white bg-gray-700 px-2 py-0.5 rounded-lg">
              Stock: {product.stock}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
