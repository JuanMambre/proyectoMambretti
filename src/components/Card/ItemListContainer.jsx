import React, { useEffect, useState } from 'react';
import { getProducts } from '../../../asyncMock';
import ItemCard from './ItemCard';
import CategoryFilter from '../Filter/CategoryFilter';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState(category || null);
  const itemsPerPage = 3;

  useEffect(() => {
    getProducts.then((data) => {
      setProducts(data);
      if (category) {
        setFilteredProducts(data.filter(product => product.categoria === category));
      } else {
        setFilteredProducts(data);
      }
    });
  }, [category]);

  useEffect(() => {
    if (selectedCategory) {
      setFilteredProducts(products.filter(product => product.categoria === selectedCategory));
    } else {
      setFilteredProducts(products);
    }
    setCurrentPage(1); // Reset to first page on category change
  }, [selectedCategory, products]);

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  const handleClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const getCurrentPageItems = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return filteredProducts.slice(startIndex, endIndex);
  };

  const categories = [...new Set(products.map(product => product.categoria))];

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 py-10">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4">
        <div className="text-center mb-10">
          <h2 className="text-white text-4xl sm:text-7xl font-bold mt-20">INNOVA TECH</h2>
          <p className="text-gray-500 py-4 max-w-md mx-auto">
            Hola, somos una empresa de venta de tecnología.
          </p>
        </div>
        <CategoryFilter
          categories={categories}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {getCurrentPageItems().map((p) => (
            <ItemCard
              key={p.id}
              id={p.id}
              titulo={p.titulo}
              descripcion={p.descripcion}
              imagen={p.imagen}
              stock={p.stock}
            />
          ))}
        </div>
        <div className="flex justify-center mt-8 space-x-2">
          {[...Array(totalPages).keys()].map((page) => (
            <button
              key={page + 1}
              onClick={() => handleClick(page + 1)}
              className={`px-4 py-2 rounded-lg ${currentPage === page + 1 ? 'bg-gray-800 text-white' : 'bg-gray-600 text-gray-300'}`}
            >
              {page + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ItemListContainer;
