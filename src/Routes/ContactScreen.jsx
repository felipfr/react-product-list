import Footer from '../Components/Footer'
import Header from '../Components/Header'
import React from 'react';
import style from './css/contactscreen.module.css';
import { Helmet } from 'react-helmet-async';
import img from '../img/contato.jpg'

const ContactScreen = () => {
  return (
    <>
      <Helmet>
        <title>Contato</title>
      </Helmet>
      <Header />
      <div className={`${style.container} animeLeft`}>
        <div className={style.image}><img src={img} alt="Máquina de escrever" /></div>
        <div className={style.description}>
          <h1>Contato</h1>
          <ul className={style.dados}>
            <li>me@felipefr.dev</li>
            <li>99999-9999</li>
          </ul></div>
      </div>
      <Footer />
    </>
  )
}

export default ContactScreen