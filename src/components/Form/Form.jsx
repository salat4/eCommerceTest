import React from 'react'
import { useState } from 'react'
import s from "../Form/Form.module.css"
export const Form = ({title,handleClick, handleGoogleLogin}) => {
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
  return (
    <div className={s.container}>
      <div className={s.input_box}>
          <input
          type="email" 
          value={email}
          onChange = {(e)=>setEmail(e.target.value)}
          placeholder = "email"
          />
          <input
          type="password" 
          value={pass}
          onChange = {(e)=>setPass(e.target.value)}
          placeholder = "password"
          />
        </div>
        <div className={s.button_box}>
          <button onClick={()=>handleClick(email,pass)}>
          {title}
          </button>
          <button onClick={()=>handleGoogleLogin()}>Google</button>
        </div>
       
    </div>
  )
}
