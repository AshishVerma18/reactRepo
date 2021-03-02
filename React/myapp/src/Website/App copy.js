import React from 'react';
import Navbar from './Website/Navbar';
import MainPage from'./Website/MainPage';
import Cards from './Website/Cards';
import Contacts from './Website/Contacts';
import Footer from './Website/Footer';

import'./App.css'

let App=()=>{
  return(
    <> 
    <Navbar/>
    <MainPage/>
    <Cards/>
    <hr/>
    <Contacts/>
    <Footer/>
    </>
  )
}
export default App;