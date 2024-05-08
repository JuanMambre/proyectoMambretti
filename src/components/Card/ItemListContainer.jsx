import React from 'react'

const ItemListContainer = () => {
    return (
      <div name="home" className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'>
          <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
              <div className=' flex flex-col justify-center h-full'>
                  <h2 className=' text-white text-4xl sm:text-7xl font-bold '> INNOVA TECH </h2>
                  <p className=' text-gray-500 py-4 max-w-md '>
                        Hola somos una empresa de venta de tecnologia.
                  </p>
              </div>
          </div>
      </div>
    )
  }

  export default ItemListContainer