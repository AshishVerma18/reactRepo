import React from'react';
import WishMessage from './Redux/WishMessage';
import CardMessage from './Redux/CardMessage';
import store from './Redux/store';
import {Provider} from 'react-redux';




let App=()=>{
    return(
        <>
        <nav className="navbar navbar-dark bg-dark">
            <a className="navbar-brand" href="https://redux.js.org/">Redux</a>
        </nav>

        
        <Provider store={store}>
        <WishMessage/>
        <CardMessage/>
        </Provider>
       
        </>
    )
}
export default App;
