import {BrowserRouter as Router, Routes, Route} from 'react-router'
import './App.css'

//Components
import Nav from './components/Nav';

//Pages
import Login from './pages/Login';
import AboutUs from './pages/AboutUs';
import AllProducts from './pages/AllProducts';
import CheckOut from './pages/CheckOut';
import ContactUs from './pages/ContactUs';
import Favorites from './pages/Favorites';
import Home from './pages/Home';
import Keyboards from './pages/Keyboards';
import Keycaps from './pages/Keycaps';
import PasswordRecovery from './pages/PasswordRecovery';
import Products from './pages/Products';
import Profile from './pages/Profile';
import Register from './pages/Register';
import ShoppingCart from './pages/ShoppingCart';
import Switches from './pages/Switches';
import TermsConditions from './pages/TermsConditions';

function App() {

  return (
    <>
    <Router>
    <Nav/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/login" element={<Login/>} />
    </Routes>
    </Router>
    </>
  )
}

export default App
