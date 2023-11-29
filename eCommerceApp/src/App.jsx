import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Outlet, Navigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import styled from "styled-components";

import { getProducts } from "./redux/productsSlice";
import Home from "./pages/Home";
import Product from "./pages/Product";
import ProductsPage from "./pages/ProductsPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BreadcrumbTrail from "./components/BreadcrumbTrail";
import Cabinet from "./pages/Cabinet";
import PersonalInformation from "./components/CABINET/PersonalInformation";
import Wishlist from "./components/CABINET/Wishlist";

const Wrapper = styled.div`

  /* background-color: red; */
  display: flex;
  justify-content: center;
  margin: 0 auto;
`;

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

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
            <Route path="/cabinet/*" element={<Cabinet />}>
              <Route index element={<Navigate to="personal-info" />} />
              <Route index path="personal-info" element={<PersonalInformation />} />
              <Route path="wishlist" element={<Wishlist />} />
            </Route>
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
