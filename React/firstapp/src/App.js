import React from 'react';
import { render } from 'react-dom';
import Product from './Props/Product';
import Cart from './Props/Cart';


function App(){
  return(
    <>
    <Cart item="1"/>
    <Product productName="IPhone12"/>
    <Cart item="2"/>
    <Product productName="IPhone11"/>
    <Product productName="IPhone12"/>
    
   
   
    
 
   </>
  );
}
export default App;