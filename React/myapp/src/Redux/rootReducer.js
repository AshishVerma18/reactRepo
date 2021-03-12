import {wishReducer} from './wishReducer';

import { combineReducers } from "redux";

let rootReducer = combineReducers({ wishMessage: wishReducer });

export { rootReducer };