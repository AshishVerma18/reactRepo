const FETCH_PRODUCTS="FETCH_PRODUCTS";
const FILTER_PRODUCTS_BY_SIZE="FILTER_PRODUCTS_BY_SIZE";
const ORDER_PRODUCT_BY_PRICE="ORDER_PRODUCT_BY_PRICE";
const fetchAction=()=>async(dispatch)=>{
    const res= await fetch("/api/products");
    const data= await res.json();
    dispatch({
        type:FETCH_PRODUCTS,

        payload:data,
    })
}
const filterProducts=(products,size)=>(dispatch)=>{
    dispatch({
        type: FILTER_PRODUCTS_BY_SIZE,
        payload:{
            size:size,
            items:size===""? products:
            products.filter((x)=> x.availableSizes.indexOf(size)>=0),
        }
    })
}
const sortProducts=(filteredProducts,sort)=>(dispatch)=>{
    const sortedProducts=filteredProducts.slice();
    if(sort===""){
        sortProducts.sort((a,b)=>(a._id > b._id ? 1:-1));

    }else{
        sortProducts.sort((a,b)=>(
            sort==="lowestprice"? a.price>b.price?1:-1
            :
            a.price<b.price?1:-1
        ))
    }
    dispatch({
        type:ORDER_PRODUCT_BY_PRICE,
        payload:{
            sort:sort,
            items:sortedProducts
        }
    })
}
export {FETCH_PRODUCTS,FILTER_PRODUCTS_BY_SIZE, ORDER_PRODUCT_BY_PRICE,fetchAction,filterProducts,sortProducts};