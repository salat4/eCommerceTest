import { Header } from '../components/Header/Header'
import { Footer } from '../components/Footer/Footer'
import {List} from '../components/List/List'
import { useParams } from 'react-router-dom'
import data from '../JSON/JSON.json'
import { useEffect, useState } from 'react'
export const CategoryListPage = () => {
  const [find, setFind] = useState([]);
    const params = useParams();
    useEffect(() => {
      const filteredData = data.filter(element => element.category === params.category);
      setFind(filteredData);
    }, [params]);
    return (
    <>
    <Header/>
    {find.length > 0 &&
        <List data = {find}/>
     }
    <Footer/>
    </>
  )
}
