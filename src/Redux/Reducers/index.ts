import {combineReducers} from 'redux';

import AllPostReducer from "./AllPostReducer";
import  PostDataReducer from "./PostDataReducer";

const rootReducer = combineReducers({
    posts : AllPostReducer,
    PostDataReducer
    
})

export default rootReducer

export type State = ReturnType<typeof rootReducer>