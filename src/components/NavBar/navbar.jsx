import { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom'; // Importa Link desde react-router-dom
import Cart from '../CartWidget/Cart';
import { getProducts } from '../../../asyncMock'; // Asegúrate de que la ruta de importación sea correcta

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getProducts.then((data) => {
      const uniqueCategories = [...new Set(data.map(product => product.categoria))];
      setCategories(uniqueCategories);
    });
  }, []);

  const links = [
    {
      id: 1,
      link: "about"
    },
    {
      id: 2,
      link: "shop"
    },
    {
      id: 3,
      link: "contact"
    }
  ];

  return (
    <div className="flex justify-between items-center w-full h-20 text-white fixed bg-black">
      <div>
        <Link to='/'>
          <h1 className="text-5xl font-signature mr-8 ml-7">IT</h1>
        </Link>
      </div>
      <div className='mr-5'>
        <ul className="hidden md:flex space-x-2 justify-center items-center">
          {links.map(({ id, link }) => (
            <li key={id} className="px-2 cursor-pointer capitalize font-medium text-white relative group">
              {link === 'shop' ? (
                <>
                  <span>Shop</span>
                  <ul className="absolute top-full mt-2 left-0 bg-black text-white rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
                    {categories.map((category, index) => (
                      <li key={index} className="px-4 py-2 hover:bg-gray-700">
                        <Link to={`/category/${category}`} onClick={() => setNav(false)}>{category}</Link>
                      </li>
                    ))}
                  </ul>
                </>
              ) : (
                <Link to={`/${link}`}>{link}</Link>
              )}
              <span className='absolute -bottom-0 top-[1.30rem] w-0 left-0 h-0.5 bg-gradient-to-r from-violet-400 to-violet-900 transition-all group-hover:w-full'/>
            </li>
          ))}
          <Cart />
        </ul>
      </div>
      <div onClick={() => setNav(!nav)} className="flex justify-center items-center space-x-5 cursor-pointer pr-4 z-10 text-white-500 md:hidden">
        <Cart />
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>
      {nav && (
        <ul className='flex flex-col justify-center items-center absolute top-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-white'>
          {links.map(({ id, link }) => (
            <li key={id} className='px-2 cursor-pointer capitalize py-6 text-4xl'>
              <Link onClick={() => setNav(!nav)} to={`/${link}`}>{link}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavBar;
