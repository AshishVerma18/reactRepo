import {GreetReducer} from './Greet/GreetReducer';
import {CounterReducer} from './Counter/Counter.reducer';

import { combineReducers } from "redux";

let RootReducer = combineReducers({ wishMessage: GreetReducer ,Qty:CounterReducer});

export { RootReducer };