import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { setAmount ,resetOrder } from '../../store/slice/basketSlice';
import s from '../Basket/Basket.module.css'
import {useAuth} from '../../hooks/userAuth'
import Notiflix from 'notiflix';

export const Basket = () => {
    const {products} =   useSelector(state => state.basket)
    const {isAuth} = useAuth()
    const dispatch = useDispatch();
    const navigate =useNavigate();
    const payable = () =>{
        let price = 0;
        for (let product of products){
          price = price + product.price * product.amount
        }
        return price
        
    }
    const payAll = () =>{
        if(isAuth){
            navigate('/') ; dispatch(resetOrder())            
        }
        else{
          Notiflix.Notify.failure("Please sign in")
        }
    }
    const handleAmoutChange = (e) => {
        e.preventDefault();
        dispatch(setAmount({ id: e.target.id, amount: e.target.value }));
      };

  return (
    <div className={s.basket__box}>
        <ul>
            {products && products.map((item) =>(
                <li key={item.id} className={s.Product__Item}>
                <div className={s.Product__Description}>
                  <div>
                    <img alt = {item.id} src = {item.img} width = {100}></img>
                  </div>
                  <div className={s.Product__Description_right}>
                    <span className={s.Product__Description__Item}>
                      {item.product}
                    </span>
                    <span>{item.price}grv</span>
                    <input
                      type="number"
                      name={item.product}
                      id={item.id}
                      value={
                      Number(  products.find((element) => element.id === item.id)
                      .amount)
                      }
                      min="0"
                      onChange={handleAmoutChange}
                      className={s.Product__Description__Amount}
                    ></input>
                  </div>
                 
                </div>
              </li>
            ))}
        </ul>
        <div>
            <p>To be payable {payable()} grv</p>
            <button className={s.pay} onClick = {payAll}>Pay</button>
        </div>
       
    </div>
  )
}
