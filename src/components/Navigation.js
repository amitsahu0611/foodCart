import {Link} from 'react-router-dom'

const Navigation = () => {

    const cartStyle = {
        background:'#F59E0D',
        display:'flex',
    }

  return (
    <>
        <nav style={{fontFamily: "Poppins"}} className='w-5/6 mx-auto py-5 flex items-center justify-between'>
                <Link to='/'>
                    <img style={{height:'65px'}} src='/images/logo.png' alt="logo" />
                </Link>
                <ul className='flex text-xl justify-between items-center'>
                    <li className='ml-6'><Link to='/'>Home</Link></li>
                    <li className='ml-6'><Link to='/products'>Products</Link></li>
                    <li className='ml-6'>
                        <Link to='/cart'>
                            <div className='rounded-full py-3 px-6' style={cartStyle}>
                                <span style={{paddingRight:'10px'}}>10</span>
                                <img src="/images/cart.png" alt="cart" />
                            </div>
                        </Link>
                    </li>
                </ul>
        </nav>
    </>
  )
}

export default Navigation