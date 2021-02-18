import React, { Component } from "react";
class Product extends Component{
    render(){
        return(
            <h3>{this.props.productName}</h3>
        );
        
    }
}
export default Product;
