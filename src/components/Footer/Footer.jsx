import React from 'react'
import s from '../Footer/Footer.module.css'
import { useState } from 'react';
import { useEffect } from 'react';
import Notiflix from 'notiflix';
import { useAuth } from '../../hooks/userAuth';
import data from '../../JSON/JSON.json'
import { Link } from 'react-router-dom';

export const Footer = () => {
  const {isAuth} = useAuth()
  const [category, setCategory] = useState([])
  let key = 0
  useEffect(()=>{
    let category = []
    data.map((item)=>(
      category.push(item.category)
    ))
    setCategory([...new Set(category)]);
      
  },[])
  return (

    <>
      <div>
        <div className={s.filter__box}>
          <Link className = {s.filter__category} to =  "/">All</Link>
          {category.map((item)=>(
            <Link key= {key++} to = {`/category/${item}`} className = {s.filter__category}>{item}</Link>
          ))}
          {isAuth ?
                    <Link  className = {s.filter__category} to = '/personal'>Personal office</Link>
                  :
                  <p onClick={()=>Notiflix.Notify.failure('Plesase You need sign in')} className = {s.filter__category}>Personal office</p>
                  }
        </div>
      </div>
        <div className={s.footer}>All rights reserved</div>

    </>
  )
}
