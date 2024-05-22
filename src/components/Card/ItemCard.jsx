import React from 'react';
import { NavLink } from 'react-router-dom';

const ItemCard = ({ titulo, imagen, descripcion, id, stock }) => {
  return (
    <div className="bg-gray-800 rounded-lg shadow-md p-5 mb-5 transition-transform duration-300 ease-in-out hover:transform hover:-translate-y-1">
      <NavLink to={`/detail/${id}`}>
        <img
          className="w-full h-auto rounded-lg mb-2.5"
          src={imagen}
          alt={`${titulo}-image`}
        />
        <div className="text-center">
          <h2 className="text-sm mb-5">{titulo}</h2>
          <p className="text-xs text-gray-400 mb-2.5">{descripcion}</p>
          <span className="text-xs text-white bg-gray-700 px-2 py-0.5 rounded-lg">
            Stock: {stock}
          </span>
        </div>
      </NavLink>
    </div>
  );
};

export default ItemCard;
