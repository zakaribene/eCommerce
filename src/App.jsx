import Shop from "./pages/Shop"
import Quotes from "./Quotes";
import Home from './pages/Home'
import About from './pages/About'
import './index.css'
import Header from "./header";
// import Footer from "./Footer"
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Contact from "./pages/Contact";
import Footer from "./Footer";

function App() {
 

  return (
   <>
  <Router>
    <Header/>
    <Routes>
      <Route path="/"  element={<Home/>}/>
       <Route path="/shop"  element={<Shop/>}/>
          <Route path="/about"  element={<About/>}/>
           <Route path="/contact"  element={<Contact/>}/>

    </Routes>
  <Footer/>  
  </Router>
    {/* <Quotes /> */}

   </>
  )
}

export default App
