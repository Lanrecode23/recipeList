import React, { useContext } from "react";
import '../pages/recipe/Recipe.css';
import { Link } from "react-router-dom";
import { Themecontext } from "../context/Themecontext";

function RecipeList({ recipe }) {
  
  const {mode} = useContext(Themecontext)
  return (
    <div>
      <div className="container mt-5 mb-3 ">
        <div className="row">
          {recipe.map((recipe) => (
            <div className="col-lg-4 col-md-6 col-sm-12 mb-4" key={recipe.id}>
              <div className={`card shadow p-3 mb-3 bg-body-tertiary rounded ${mode}`}>
                <div className="card-body">
                  <h5 className="card-title">{recipe.title}</h5>
                  <p className="card-text">{recipe.time}</p>
                  <p className="card-text fst-italic ">{recipe.methods.substring(0,90)}....</p>
                  <Link to={`/recipes/${recipe.id}`}>
                  <button type="button" className="btn btn-success btn-sm">Cook this</button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default RecipeList;
