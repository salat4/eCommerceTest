import React from 'react'
import { Link } from 'react-router-dom';
import s from '../Header/Header.module.css'
import svg from '../../image/svg/symbol-defs.svg'
import {useAuth} from '../../hooks/userAuth'
import data from '../../JSON/JSON.json'
import { useEffect } from 'react';
import Notiflix from 'notiflix';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Header = () => {
  let navigate = useNavigate()
  let key = 0
  const [category, setCategory] = useState([])
  const {isAuth, email} = useAuth()
  const navigateCategory = (item) =>{
    navigate(`/category/${item}`)
  }
  useEffect(()=>{
    let cat = []
    data.map((item)=>(
      cat.push(item.category)
    ))
    setCategory([...new Set(cat)]);
      
  },[])
  return (
    <header className={s.container}>
      <ul>
        <li onClick={()=>navigate('/')}>All</li>
        {category.map((item) => (
          <li key= {key++} onClick={() => navigateCategory(item)}>{item}</li>
        ))}
      </ul>
      <div>
      {isAuth ? 
      <div className={s.header}>
        <p>You are logged in {email}</p>
      </div>
      : 
      <div className={s.header}>
      <p>Please <Link className={s.login} to = "/login">Log in</Link> to your account or <Link className={s.register} to = "/register">Register</Link> </p>
      </div>
      } 
      {!isAuth    ?       <div className={s.basket_box}>
        <p className={s.personal} onClick={()=>Notiflix.Notify.failure('Plesase You need sign in')}>Personal office</p>
        <Link to = '/basket' className={s.basket}>
          <svg width={30} height = {30}>
            <use href = {`${svg}#icon-cart`}/>
          </svg>
        </Link>
      </div>
      :   <div className={s.basket_box}>
        <Link className={s.personal} to = '/personal'>Personal office</Link>
        <Link to = '/basket' className={s.basket}>
          <svg width={30} height = {30}>
            <use href = {`${svg}#icon-cart`}/>
          </svg>
        </Link>
      </div>
      }

      
      </div>
 
    </header>
  )
}