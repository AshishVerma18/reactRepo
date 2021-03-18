import {createStore} from 'redux';
import {RootReducer} from './RootReducer';
import { composeWithDevTools } from "redux-devtools-extension";
let Store=createStore(RootReducer, composeWithDevTools());
export default Store;