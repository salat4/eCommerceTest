import React from 'react'
import { useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {addToOrder ,setAmount} from '../../store/slice/basketSlice'
import s from "../Item/Item.module.css"
import { Header } from '../Header/Header'
import { Footer } from '../Footer/Footer'
export const Item = () => {
   const location =  useLocation()
   const dispatch = useDispatch()
   const {products} = useSelector(state => state.basket)
   const clickBuy = () =>{
       if (products.length > 0) {
        
           for (let i = 0; i < products.length; i++){
             if (products[i].id === location.state.id) {
               dispatch(
               setAmount({
                img:location.state.img,
                 product: location.state.products,
                 id: location.state.id,
                 price:location.state.price,
                 amount:
                 products.find(
                     (element) => element.id === products[products.length - 1].id
                   ).amount + 1,
               })
               )
               return
             }
           }
           dispatch(
               addToOrder({ id: location.state.id, img:location.state.img,price:location.state.price, amount: 1, product: location.state.products })
             );
         } else {
           dispatch(addToOrder({ id: location.state.id,img:location.state.img, price:location.state.price, amount: 1, product: location.state.products }));
         }
   }
   
  return (
    <div>
      <Header/>
        {location && 
        <div className={s.container}>
            <img src={location.state.img} alt={location.state.id} />
                <ul className={s.box}>
                    <li className={s.price}>
                        {location.state.price} grv
                    </li>
                    <li className={s.products}>
                        {location.state.products}
                    </li>
                    <li className={s.description}>
                        {location.state.description}
                    </li>
                    <li >
                        <button className={s.buy} onClick={()=>clickBuy()}>
                            Buy
                        </button>
                    </li>
                </ul>
        </div>
            
        }
        <Footer/>
    </div>
  )
}
