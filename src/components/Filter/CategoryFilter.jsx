import React from 'react';

const CategoryFilter = ({ categories, selectedCategory, onSelectCategory }) => {
  return (
    <div className="flex justify-center mb-8 space-x-4">
      <button
        onClick={() => onSelectCategory(null)}
        className={`px-4 py-2 rounded-lg ${!selectedCategory ? 'bg-gray-800 text-white' : 'bg-gray-600 text-gray-300'}`}
      >
        Todos
      </button>
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onSelectCategory(category)}
          className={`px-4 py-2 rounded-lg ${selectedCategory === category ? 'bg-gray-800 text-white' : 'bg-gray-600 text-gray-300'}`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
