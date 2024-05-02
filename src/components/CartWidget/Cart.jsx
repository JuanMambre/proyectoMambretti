import React from 'react'
import { FaShoppingCart } from 'react-icons/fa'

const Cart = () => {
  return (
    <div>
        <li className="relative">
            <FaShoppingCart size={25} />
            <span className="absolute top-0 right-0 bg-red-500 rounded-full text-white text-xs w-3.5 h-3.5 flex items-center justify-center cursor-pointer">1</span>
        </li>
    </div>
  )
}

export default Cart