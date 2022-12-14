import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PageContainer from '../components/containerPage';
import Contact from '../pages/contact';
import Home from '../pages/home';
import Product from '../pages/productDetail';
import Shop from '../pages/shop';
import {
  CONTACT_PATH, HOME_PATH, PRODUCT_PATH, SHOP_PATH
} from './path';

const AppRoutes = () => (
  <BrowserRouter>
    <PageContainer>
      <Routes>
        <Route path={HOME_PATH} element={<Home />} />
        <Route path={CONTACT_PATH} element={<Contact />} />
        <Route path={SHOP_PATH} element={<Shop />} />
        <Route path={PRODUCT_PATH} element={<Product />} />
      </Routes>
    </PageContainer>
  </BrowserRouter>
);

export default AppRoutes;
