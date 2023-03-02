import React from 'react'
import { Form } from '../Form/Form'
import { getAuth, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useDispatch } from 'react-redux'
import { setUser } from '../../store/slice/userSlice';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'
import s from "../Register/Register.module.css"
import Notiflix from 'notiflix';

export const Register = () => {
  const dispatch = useDispatch()
  let navigate = useNavigate()
  const handleGoogleLogin = () =>{
    const auth = getAuth();

    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
    .then(({user})=>{
      dispatch(setUser({
        email:user.email,
        token:user.accessToken,
        id:user.uid
      }));
      navigate(-1)
      Notiflix.Notify.success('Create User done');
    })
    .catch((error)=>{
      Notiflix.Notify.error(error)
    })
  }

  const handleRegister = (email,password) =>{
    const auth = getAuth();
    createUserWithEmailAndPassword(auth,email,password)
    .then(({user})=>{
      dispatch(setUser({
        email:user.email,
        token:user.accessToken,
        id:user.uid
      }));
      navigate(-1)
      Notiflix.Notify.success('Create User done');
    })
    .catch((error)=>{
      Notiflix.Notify.error(error)
    })

  }
  return (

    <div className={s.container__register}>
    <h3>
      Register
    </h3>
    <Form title = {'Register'} handleClick = {handleRegister} handleGoogleLogin = {handleGoogleLogin}/>

    <p> Already have account ? <Link className={s.link}  to = "/login">Login</Link></p>
  </div>
  )
}
