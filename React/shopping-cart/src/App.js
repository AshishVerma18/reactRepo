//feature-1
import React, { Component } from 'react';
import Cart from './Components/Cart';
import Filter from './Components/Filter';
import Products from './Components/Products';
import {Provider} from 'react-redux';
import data from './data.json';
import store from './store';

class  App extends Component {
  constructor(){
    super();
    this.state={
      products:data.products,
      cartItems:localStorage.getItem("cartItems")? JSON.parse(localStorage.getItem("cartItems")):[],
      size:"",
      sort:"",
    };
  }
  // sortProducts=(event)=>{
  //   const sort=event.target.value;
  //   console.log(event.target.value);
  //   this.setState({
    
  //     sort:sort,
  //     products:this.state.products.slice().sort((a,b)=>
  //       sort==="lowest"
  //       ? a.price > b.price
  //        ? 1
  //        :-1
  //       :sort==="highest"
  //       ? a._price < b._price
  //         ?1
  //         :-1
  //       :a._id < b._id
  //       ? 1
  //       : -1
  //     ),
  //   })
  // }
  // filterProducts=(event)=>{
  //   if(event.target.value===""){
  //     this.setState({
        
  //       size:event.target.value,
  //       products:data.products,
  //     });
  //   }
  //   else{
  //     this.setState({
  //       size:event.target.value,
  //       products:data.products.filter(
  //       (product)=>product.availableSizes.indexOf(event.target.value)>=0
  //       ),
  //     });
  //   }
    
    
  // };
  removeFromCart=(product)=>{
    const cartItems=this.state.cartItems.slice();
    this.setState({cartItems:cartItems.filter(x=>x._id !== product._id)});
    localStorage.setItem("cartItems",JSON.stringify(cartItems.filter(x=>x._id !== product._id)));
   
    
  };
  addToCart=(product)=>{
    const cartItems=this.state.cartItems.slice();//clone copy of cartItems
    let alreadyInCart=false;
    cartItems.forEach((item)=>{
      if(item._id===product._id){
        item.count++;
        alreadyInCart=true;
      }
    });
    if(!alreadyInCart){
      cartItems.push({...product,count:1});
    }
    this.setState({cartItems});
    localStorage.setItem("cartItems",JSON.stringify(cartItems));
   
  }
  createOrder=(order)=>{
    alert("need to save order for "+order.name);

  };
  render(){
    return (
      <Provider store={store}>
    <>
  
    <div className="grid-container">
      <header>
        <a className="grid-container" href="/">Shopping Cart</a>
      </header>
      <main>
       <div className="content">
         <div className="main">
           <Filter/> 
           {/* count={this.state.products.length}
           size={this.state.size}
           sort={this.state.sort}
           filterProducts={this.filterProducts}
           sortProducts={this.sortProducts}/> */}
           <Products  addToCart={this.addToCart}/>
           {/* //products={this.state.products} */}
         </div>
         <div className="sidebar">
         <Cart cartItems={this.state.cartItems} 
         removeFromCart={this.removeFromCart}
         createOrder={this.createOrder}/>
         </div>
       </div>
      </main>
      <footer>
        All rights reserved
      </footer>
      </div> 
    
    </>
    </Provider>
    
    
  );
}
}

export default App;
