import {BrowserRouter as Router, Routes, Route} from 'react-router'

//Components
import Nav from './components/Nav';

//Pages
import Login from './pages/user/Login';
import AboutUs from './pages/user/AboutUs';
import AllProducts from './pages/user/AllProducts';
import CheckOut from './pages/user/CheckOut';
import ContactUs from './pages/user/ContactUs';
import Favorites from './pages/user/Favorites';
import Home from './pages/user/Home';
import PasswordRecovery from './pages/user/PasswordRecovery';
import Products from './pages/user/Products';
import Profile from './pages/user/Profile';
import Register from './pages/user/Register';
import ShoppingCart from './pages/user/ShoppingCart';
import Switches from './pages/user/Switches';
import TermsConditions from './pages/user/TermsConditions';
import Footer from './pages/user/Footer';
import EditProfileDesktop from './components/ProfileDesign/EditProfileDesign';

function App() {

  return (
    <>
    <Router>
    <Nav/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/register" element={<Register/>} />
      <Route path="/product" element={<Products/>} />
      <Route path="/contacto" element={<ContactUs/>} />
      <Route path="/favorites" element={<Favorites/>} />
      <Route path="/cart" element={<ShoppingCart/>} />
      <Route path="/sobre-nosotros" element={<Login/>} />
      <Route path="/allproducts" element={<AllProducts/>} />
      <Route path="/checkout" element={<CheckOut/>} />
      <Route path="Footer" element={<Footer/>}/>
      <Route path="Profile" element={<Profile/>}/>
      


    </Routes>
    </Router>

    </>
  )
}

export default App
