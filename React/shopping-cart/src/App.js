//feature-1
import React, { Component } from 'react';
import Products from './Components/Products';

import data from './data.json';

class  App extends Component {
  constructor(){
    super();
    this.state={
      products:data.products,
      size:"",
      sort:"",
    };
  }
  render(){
    return (
    <>
    <div className="grid-container">
      <header>
        <a href="/">Shopping Cart</a>
      </header>
      <main>
       <div className="content">
         <div className="main">
           <Products products={this.state.products}/>
         </div>
         <div className="sidebar">
           cart items
         </div>
       </div>
      </main>
      <footer>
        All rights reserved
      </footer>
      </div> 
    </>
    
    
  );
}
}

export default App;
