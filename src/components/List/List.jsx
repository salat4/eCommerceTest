import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import s from '../List/List.module.css'
import Notiflix from 'notiflix';
import { Link } from 'react-router-dom';
import {addToOrder ,setAmount} from '../../store/slice/basketSlice'
import { useState } from 'react';
import { useEffect } from 'react';
export const List = ({data}) => {
    const dispatch = useDispatch()
    const {products} = useSelector(state => state.basket)
    const [filterData, setFilterData] = useState([])
  useEffect(()=>{
    setFilterData(data)
  },[data])
    const clickBuy = (items) =>{
        if (products.length > 0) {
            for (let i = 0; i < products.length; i++){
              if (products[i].id === items.id) {
                dispatch(
                setAmount({
                  product: items.products,
                  img: items.img,
                  id: items.id,
                  price:items.price,
                  amount:
                  products.find(
                      (element) => element.id === products[products.length - 1].id
                    ).amount + 1,
                })
                )
                Notiflix.Notify.success('Add to Order');
                return
              }
            }
            Notiflix.Notify.success('Add to Order');
            dispatch(
                addToOrder({ id: items.id,img: items.img,price:items.price, amount: 1, product: items.products })
              );
          } else {
            Notiflix.Notify.success('Add to Order');
            dispatch(addToOrder({ id: items.id, img: items.img,price:items.price, amount: 1, product: items.products }));
          }
    }
    const filter = (condition) =>{ 
      setFilterData([...data].sort((a, b) => {
        switch (condition) {
          case "priceMinMax":
            return Number(a.price) - Number(b.price);
          case "priceMaxMin":
            return Number(b.price) - Number(a.price);
          case "rating":
            return Number(b.rating) - Number(a.rating);
          case "ratinMaxMin":
            return Number(b.price) - Number(a.price);
          default:
            return data;
        }
      }));
  }
  return (
    <section>
      <div className={s.filter}>
        <p>
          Filter
        </p>
        <ul >
          <li onClick={()=>{filter("priceMinMax")}}>
            Lower to higher
          </li>
          <li onClick={()=>{filter("priceMaxMin")}}>
            Higher to lower
          </li>
          <li onClick={()=>{filter("rating")}}>
            By rating
          </li>
        </ul>
      </div>
        <ul className={s.list}>
            {filterData.map((items)=>(
                <div className={s.box}>
                    <Link to={`${items.id}`} state = {items}>
                        <li className={s.item} key = {items.id}>
                            <img src = {items.img} alt = {items.products} width = "250" height="250" className={s.img}/>
                            <div className={s.box__description}>
                                <p className={s.rating}>{items.rating} / 5 rating</p>
                                <p className={s.products}>{items.products}</p>
                                <p className={s.price}>{items.price} grv</p>
                            </div>
                        </li>
                    </Link>
                    <button onClick={()=>clickBuy(items)} className={s.buy}>Buy</button>
                </div>
            ))
               
            }
        </ul>
    </section>
  )
}
