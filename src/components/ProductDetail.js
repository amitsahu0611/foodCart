import React from 'react'

const ProductDetail = () => {
  return (
    <>
        <div style={{width:'250px'}}>
            <img src="./images/peproni.png" alt="" />
            <div className='text-center'>
              <h2 className='text-2xl py-2 font-bold'>Havana Special</h2>
              <span className='rounded-full text-xl px-5 py-2 bg-gray-200'>small</span>
            </div>
            <div className='mt-2 mx-auto w-4/6 flex justify-between'>
              <span className='text-xl py-2'>$500</span>
              <button className='bg-yellow-600 font-bold hover:bg-yellow-700 text-xl px-5 py-2 rounded-full '>ADD</button>
            </div>
        </div>
    </>
  )
}

export default ProductDetail