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
import BreadcrumbTrail from "./components/BreadcrumbTrail";
import styled from "styled-components";

const Wrapper = styled.div`
    /* background-color: red; */
    display: flex;
    justify-content: center;
    margin: 0 auto;
`


const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <div className="wrapper">
      <Router>
        <Navbar />
        <Wrapper className="crumb-cont">
          <BreadcrumbTrail />
        </Wrapper>

        <div className="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/products/:id" element={<Product />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
};

export default App;

