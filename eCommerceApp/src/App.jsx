import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import React, { useEffect } from "react";
import { getProducts } from "./redux/productsSlice";
import { useDispatch } from "react-redux";
import ProductsPage from "./pages/ProductsPage";

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
       dispatch(getProducts());
     }, []);

  return (
    <div className="wrapper">
      <Router>
        <Navbar />
        <div className="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/product/:id" element={<Product />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
