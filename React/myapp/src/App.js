import React from'react';
import FormRef from './Hooks/HooksAddn/FormRef';
// import ImgRef from './Hooks/HooksAddn/ImgRef';
// import ContactApp from './Axios/ContactApp'
// import ContactList from './ContactList/ContactList';
// import ContactCard from './ContactList/ContactCard';
// import WishMessage from './Redux/WishMessage';
// import CardMessage from './Redux/CardMessage';
// import store from './Redux/store';
// import {Provider} from 'react-redux';




let App=()=>{
    return(
        <>
        <nav className="navbar navbar-dark bg-dark">
            <a className="navbar-brand" href="https://redux.js.org/">Redux</a>
        </nav>
        <FormRef/>
        {/* <ContactApp/>
        <ContactList/>
        <ContactCard/> */}
        
        {/* <Provider store={store}>
        <WishMessage/>
        <CardMessage/>
        </Provider> */}
       
        </>
    )
}
export default App;
