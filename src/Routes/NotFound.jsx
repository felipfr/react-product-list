import Footer from '../Components/Footer';
import Header from '../Components/Header';
import React from 'react';
import img from '../img/404.png'
import style from './css/notfound.module.css';
import { Helmet } from 'react-helmet-async';

const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>404 | Página Não Encontrada</title>
      </Helmet>
      <Header />
      <div className={style.container}>
        <img src={img} alt="404" className={style.notFound}/>
        <h1>Página Não Encontrada</h1>
      </div>
      <Footer />
    </>
  )
}

export default NotFound