import {GET_ARTICLE} from "../ActionTypes/ArticleTypes"

const initialState = {
    articles:[]
    }
    
    const ArticleReducer= (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ARTICLE:
        return({...state,articles:payload.article})
  
    default:
       return state
  }
    }
    export default ArticleReducer