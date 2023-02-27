import Footer from '../Components/Footer';
import Header from '../Components/Header';
import ProductList from '../Components/ProductList';
import React from 'react';
import { Helmet } from 'react-helmet-async';

const HomeScreen = () => {
  return (
    <>
      <Helmet>
        <title>Produtos</title>
      </Helmet>
      <Header />
      <ProductList />
      <Footer />
    </>
  )
}

export default HomeScreen