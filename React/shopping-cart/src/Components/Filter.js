import React, { Component } from 'react'
import{filterProducts,sortProducts} from  '../actions/action';
import {connect} from 'react-redux';


 class Filter extends Component {
    render() {
        return (
            this.props.filteredProducts?(<div>Loading...</div>):(
                <div className="filter">
                <div className="filter-result">{this.props.filteredProducts.length} Products</div>
                <div className="filter-sort">
                    order{" "}
                    <select value={this.props.sort}onChange={(e)=>
                        this.props.sortProducts(this.props.filteredProducts,e.target.value)}>
                        <option>Latest</option>
                        <option value="lowest">Lowest</option>
                        <option value="highest">Highest</option>

                    </select>
                </div>
                <div className="filter-size">
                    Filter{" "}
                    <select value={this.props.size}onChange={(e)=>
                        this.props.filterProducts(this.props.products,e.target.value)}>
                        <option value="">ALL</option>
                        <option value="XS">XS</option>
                        <option value="S">S</option>
                        <option value="M">M</option>
                        <option value="L">L</option>
                        <option value="XL">XL</option>
                        <option value="XXl">XXL</option>
                    </select>
                </div>
            </div>
            )
           
        )
    }
}
export default connect((state=({
    size:state.product.size,
    sort:state.product.sort,
    products:state.products.items,
    filteredProducts:state.product.filteredItems,
})),{
    filterProducts,
    sortProducts,
})(Filter);
