import './App.css';
import {HomePage} from './page/HomePage'
import {LoginPage} from './page/LoginPage'
import {RegisterPage} from './page/RegisterPage'
import {Routes , Route} from 'react-router-dom'
import { ItemPage } from './page/ItemPage';
import { PersonalPage } from './page/PersonalPage';
import BasketPage from './page/BasketPage';
import { CategoryListPage } from './page/CategoryListPage';
function App() {
  return (
  <div className='container'>
    <Routes>
      <Route  path = "/" element = {<HomePage/>}/>
      <Route  path = "/login" element = {<LoginPage/>}/>
      <Route  path = "/register" element = {<RegisterPage/>}/>
      <Route  path = "/personal" element = {<PersonalPage/>}/>
      <Route  path = "/:item" element = {<ItemPage/>}/>
      <Route  path = "/category/:category" element = {<CategoryListPage/>}/>
      <Route  path = "/basket" element = {<BasketPage/>}/>
    </Routes>
  </div >
  );
}

export default App;

