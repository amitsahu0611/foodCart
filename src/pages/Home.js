import React from 'react'
import Products2 from '../components/Products2'

const Home = () => {
  return (
    <>
        <div className='hero py-16'>
            <div className="w-4/6 mt- flex justify-between items-center mx-auto">
                <div className='w-1/2'>
                    <h6 className='text-2xl'><i>Are you hungry ?</i></h6>
                    <h1 className=' font-semibold text-4xl md:text-6xl'>Don't wait !</h1>
                    <button className='text-2xl px-6 py-2 rounded-full text-white font-bold bg-yellow-600 hover:bg-yellow-700'>Order Now</button>
                </div>

                <div className='w-1/2'>
                    <img className='w-4/5' src="./images/pizza.png" alt="" />
                </div>
            </div>
        </div>

        <div className='pb-24'>
            <Products2/>
        </div>
    </>
  )
}

export default Home