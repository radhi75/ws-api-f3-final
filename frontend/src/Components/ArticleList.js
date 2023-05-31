import React, { useEffect, useState } from 'react'
import {useDispatch, useSelector} from "react-redux"
import { Get_article } from '../redux/Action/ArticleAction'
import ArticlesCard from './ArticlesCard'
import Spinner from 'react-bootstrap/Spinner';
const ArticleList = ({search}) => {
  const [loading,setLoading]=useState(true)
  const dispatch=useDispatch()
  useEffect(() => {
    setTimeout(() => {
      dispatch(Get_article(),setLoading(false))
    }, 1000);
    
  
  }, [dispatch])
  const articles=useSelector(state=>state.ArticleReducer.articles)
  console.log(articles)
  return (
    <div style={{display:'flex',justifyContent:"center",alignItems:"center",margin:"5%",gap:"20px",flexWrap:"wrap"}}>
    {loading ? <Spinner animation="border" role="status">
    <span className="visually-hidden">Loading...</span>
    </Spinner> : articles?.filter((el)=>el.name.toUpperCase().includes(search.toUpperCase()))?.map((el)=><ArticlesCard key={el._id} el={el}/>) }
    </div>
  )
}

export default ArticleList