import {combineReducers, legacy_createStore as createStore} from "redux";
import profileReducer from "./profileReducer";
import messageReducer from "./messageReducer";

let reducers = combineReducers({
    profile: profileReducer,
    messages: messageReducer
})

let reduxStore = createStore(reducers);

export default reduxStore;