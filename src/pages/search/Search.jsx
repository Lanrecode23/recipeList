import React from 'react'
import './Search.css'
import { useLocation } from 'react-router-dom'
import Usefetch from '../../hooks/Usefetch'
import RecipeList from '../../components/RecipeList'

function Search() {

  const queryString = useLocation().search
  const queryStringParams = new URLSearchParams(queryString).get('q')
  const url = 'http://localhost:3000/recipes?q='+ queryStringParams;
  const{ data , loading , error} = Usefetch(url);
  return (
    <div>
       {error && <div>{error}</div>}
      {loading && <div>Loading...</div>}
      {data && data.length===0 ? 
        <h5 className='text-center fst-italic text-danger' style={{margin:'15em'}}>No recipe Found</h5>
        : data &&(
          <div style={{margin:'10em 0 16em 0'}}>
            <RecipeList recipe= {data}/>
          </div>
        )
      } 
    </div>
  )
}

export default Search
