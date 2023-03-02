import React from 'react'
import { Header } from '../components/Header/Header'
import { Footer } from '../components/Footer/Footer'
import {List} from '../components/List/List'
import data from "../JSON/JSON.json"

export const HomePage = () => {
  return (
    <>
    <Header/>
    <List data = {data}/>
    <Footer/>
    </>
      
  )
}

