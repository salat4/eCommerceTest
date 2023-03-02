import React from 'react'
import { useSelector } from 'react-redux'
import {Basket} from '../components/Basket/Basket'
const BasketPage = () => {
  const {products} =   useSelector(state => state.basket)
  return (
    <>
        {products.length === 0 ? 
        <p>It's still empty here</p>
        :
        <Basket/>
        }
    </>
  )
}

export default BasketPage
