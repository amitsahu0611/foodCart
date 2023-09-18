import{BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import Navigation from './components/Navigation';
import Product from './pages/Product';
import CartPage from './pages/CartPage';

function App()
{
  return(
    <>
        <Router>
          {/* <a href="/">Home</a>
          <a href="/about">About</a> */}
          <Navigation/>
          <Routes>
            <Route path='/' Component={Home} exact></Route>
            {/* <Route path='/about' Component={About}></Route> */}
            <Route path='/products' Component={Product}></Route>
            <Route path='/cart' Component={CartPage}></Route>
          </Routes>
        </Router>
    </>
  )
}

export default App;