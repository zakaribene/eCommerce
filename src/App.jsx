import './index.css'
import Shop from "./pages/Shop"
import Home from './pages/Home'
import About from './pages/About'
import Contact from "./pages/Contact";
import Footer from "./Footer";
// import Header from './pages/header'
import Cart from "./pages/Cart";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

  // ✅ CART IMPORT
function App() {
  return (
    <>
      <Router>
        {/* <Header /> */}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />   {/* ✅ CART ROUTE */}
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <Footer />
      </Router>
    </>
  )
}

export default App
