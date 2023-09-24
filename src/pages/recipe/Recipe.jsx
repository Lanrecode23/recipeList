import React, { useContext } from 'react'
import './Recipe.css'
import { useParams } from 'react-router-dom'
import Usefetch from '../../hooks/Usefetch'
import { Themecontext } from '../../context/Themecontext'

function Recipe() {
  const {id} = useParams()
  const url = " http://localhost:3000/recipes/" + id
  const{data , error, loading} = Usefetch(url)
 
  const {mode} = useContext(Themecontext)
  return (
    <div>
      {error && <div>{error}</div>}
      {loading && <div>Loading...</div>}
      {data && (
      <div className={`container surround mt-5 text-center d-flex flex-column shadow-lg p-5 mb-3 bg-body-tertiary rounded ${mode}`}>
      <h3 className='title'>{data.title}</h3>
      <div className='line'></div>
      <p className='fst-italic'>Takes {data.time} to cook</p>
      <ul className='list-unstyled fst-italic text-sm' style={{fontSize:'14px'}}>
        {data.ingredients.map((ingredient)=>(
          <li>{ingredient}</li>
        ))}
      </ul>
      <p className='w-75 m-auto method fst-italic'>{data.methods}</p>
      </div>
      )}
    </div>
  )
}

export default Recipe
