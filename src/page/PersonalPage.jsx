import React from 'react'
import { Personal } from '../components/Personal/Personal'
import {useAuth} from '../hooks/userAuth'
import { useNavigate } from 'react-router-dom';
import Notiflix from 'notiflix';

export const PersonalPage = () => {
  const {isAuth} = useAuth()
  let navigate = useNavigate()

  return (
    <div>
      {isAuth ? <Personal/> : (Notiflix.Notify.success("Please, you need sign in or register") , navigate('/login') )}
    </div>
  )
}


