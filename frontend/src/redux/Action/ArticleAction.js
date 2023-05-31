import axios from "axios"
import { GET_ARTICLE } from "../ActionTypes/ArticleTypes"

export const Get_article=()=>async(dispatch)=>{
try {
    const res=await axios.get('/article/get')
    dispatch({type:GET_ARTICLE,payload:res.data})
} catch (error) {
    console.log(error)
}
}
export const Add_article=(data)=>async(dispatch)=>{
    try {
        await axios.post('/article/post',data)
        dispatch(Get_article())
    } catch (error) {
        console.log(error)
    }
}
export const Delete_article=(id)=>async(dispatch)=>{
    try {
        await axios.delete(`/article/delete/${id}`)
        dispatch(Get_article())
    } catch (error) {
        console.log(error) 
    }
}
export const Edit_article=(id,data)=>async(dispatch)=>{
    try {
        await axios.put("/article/update/"+id,data)
        dispatch(Get_article())
    } catch (error) {
        console.log(error) 
    }
}