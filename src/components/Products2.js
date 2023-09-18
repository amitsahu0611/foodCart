import React from 'react'
import ProductDetail from './ProductDetail'

const Products2 = () => {
  return (
    <>
     <div className='w-5/6 mx-auto pb-24'>
        <h1 className='text-3xl font-bold my-8'>Products</h1>
        <div className="grid grid-cols-5 my-8 gap-24">
            <ProductDetail/>
            <ProductDetail/>
            <ProductDetail/>
            <ProductDetail/>
            <ProductDetail/>
        </div>
     </div>
    </>
  )
}

export default Products2