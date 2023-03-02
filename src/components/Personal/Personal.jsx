import React from 'react'
import s from '../Personal/Personal.module.css'
import {useAuth} from '../../hooks/userAuth'
import profile from '../../image/profile.jpeg'
import { useDispatch } from 'react-redux'
import { removeUser } from '../../store/slice/userSlice'
import { useNavigate } from 'react-router-dom'
import { Header } from '../Header/Header'
import { Footer } from '../Footer/Footer'
export const Personal = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const logOut = () =>{
        dispatch(removeUser())
        navigate('/')
    }
    const info = useAuth()
  return (
    <>
      <Header/>
      <div className={s.box}>
        <img alt = 'profile_picture' src = {profile}></img>
        <p>Hi, {info.email}</p> 
        <p>Your id on this site is {info.id}</p>
        <p>You can log out of your account</p>
        <button onClick={logOut}>Log out</button>
      </div>
      <Footer/>
    </>

  )
}
