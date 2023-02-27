import Footer from '../Components/Footer'
import Header from '../Components/Header'
import Product from '../Components/Product'
import React from 'react'
import { useParams } from 'react-router-dom';

const ProductScreen = () => {
  const { id } = useParams();

  return (
    <>
    <Header />
    <Product id={id} />
    <Footer />
  </>
  )
}

export default ProductScreen