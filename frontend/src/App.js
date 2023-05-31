
import { useState } from 'react';
import './App.css';
import ArticleList from './Components/ArticleList';
import Naviagtion from './Components/Naviagtion';
import {Routes,Route} from "react-router-dom"
function App() {
  const [search,setSearch]=useState('')
  return (
    <div className="App">
    <Naviagtion setSearch={setSearch}/>
    <Routes>
      <Route path='/' element={<ArticleList search={search}/>}/>
    </Routes>
    </div>
  );
}

export default App;
