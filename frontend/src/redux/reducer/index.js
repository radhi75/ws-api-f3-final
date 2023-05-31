
import {combineReducers} from "redux"
import UserReducer from "./UserReducer"
import ArticleReducer from "./ArticleReducer"


const rootreducer=combineReducers({UserReducer,ArticleReducer})

export default rootreducer