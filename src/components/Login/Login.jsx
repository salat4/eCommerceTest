import React from 'react'
import { useDispatch } from 'react-redux'
import { getAuth, signInWithEmailAndPassword ,signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import Notiflix from 'notiflix';
import { Link } from 'react-router-dom'
import s from "../Login/Login.module.css"
import { Form } from '../Form/Form'
import { setUser } from '../../store/slice/userSlice'
export const Login = () => {
  let navigate = useNavigate()
  const dispatch = useDispatch()
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
      Notiflix.Notify.success('Sign in Done');
    })
    .catch((error)=>{
      Notiflix.Notify.failure(error)
    })
  }


  const handleLogin = (email,password) =>{
    const auth = getAuth();
    signInWithEmailAndPassword(auth,email,password)
    .then(({user})=>{
      dispatch(setUser({
        email:user.email,
        token:user.accessToken,
        id:user.uid
      }));
      navigate(-1)
      Notiflix.Notify.success('Sign in Done');
    })
    .catch((error)=>{
      Notiflix.Notify.failure(error)
    })

  }
  return (

    <div className={s.container__login}>
      <h3>
            Login
            
        </h3>
    <Form title = {'Sign in'} handleClick = {handleLogin} handleGoogleLogin={handleGoogleLogin}/>
    <p>
            or <Link to = '/register' className={s.link} >Register</Link>
        </p>
    </div>
  )
}
