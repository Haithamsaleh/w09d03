import { createStore,combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import Signin from "./signin";
import Tasks from "./task"

const reducers = combineReducers({Signin,Tasks});

const store = ()=>{
    return createStore(reducers,composeWithDevTools());
}

export default store();