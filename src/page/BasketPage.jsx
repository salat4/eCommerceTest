import React from 'react'
import { useSelector } from 'react-redux'
import {Basket} from '../components/Basket/Basket'
import { Footer } from '../components/Footer/Footer'
import { Header } from '../components/Header/Header'
const BasketPage = () => {
  const {products} =   useSelector(state => state.basket)

  return (
    <>
    <Header/>
        {products.length === 0 ? 
        <p style = {{textAlign:'center'}}>It's still empty here</p>
        :
        <Basket/>
        }
      <Footer/>
    </>
  )
}

export default BasketPage
