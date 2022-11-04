import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Nav from "./components/Nav/Nav";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Signin from "./components/Singin/Signin";
import Signup from "./components/Signup/Signup";
import ProductDescription from "./components/ProductDescription/ProductDescription";
import Cart from "./components/Cart/Cart";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product/:productid" element={<ProductDescription />} />
        </Routes>
      <Footer />  
      </BrowserRouter>
      
    </div>
  );
}

export default App;
