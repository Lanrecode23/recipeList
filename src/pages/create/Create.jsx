import React, { useContext, useState } from "react";
import "./Create.css";
import Usefetch from "../../hooks/Usefetch";
import { useNavigate } from "react-router-dom";
import { Themecontext } from "../../context/Themecontext";


function Create() {
  const [title, setTitle] = useState("");
  const [methods, setMethod] = useState("");
  const [time, setTime] = useState("");
  const [newIngredients, setNewIngredients] = useState("");
  const [ingredients, setIngredient] = useState([]);

  const navigate = useNavigate()

  const { optionData} = Usefetch("http://localhost:3000/recipes" , "POST");

  // function to handle the form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    optionData({title, ingredients, methods, Time: time + 'minutes'})
    handleDirect();
  };

  // get the mode 
  const {mode} = useContext(Themecontext)
  
  const handleAdd = (e) => {
    e.preventDefault();
    const ing = newIngredients.trim();
    if (ing && !ingredients.includes(ing)) {
      setIngredient((prevIngredient) => [...prevIngredient, ing]);
    }
    setNewIngredients("");
  };

  const handleDirect = () => {
    setTimeout(() => {
      navigate("/");
    }, 1000);
  }

  return (
    <section className={`section_form mt-5 ${mode}`}>
      <h3 className="text-center add fw-semibold">Add a New Recipe</h3>
      <form
        className="consultation-form feed-form"
        action="#"
        onSubmit={handleSubmit}
      >
        <input
          required
          placeholder="Recipe Title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label htmlFor="">
          <span className="fst-italic">Recipe Ingredients:</span>
          <br />
          <input
            placeholder="Recipe Ingredient"
            type="text"
            value={newIngredients}
            onChange={(e) => setNewIngredients(e.target.value)}
            className="w-75"
          />

          <button className="shadow__btn  Addit" onClick={handleAdd}>
            Add
          </button>
          <span className="ingredients text-secondary">
            Current Ingredients:{" "}
            {ingredients.map((i) => (
              <em key={i}>{i} , </em>
            ))}
          </span>
        </label>
        <textarea
          name="text"
          required
          placeholder="Recipe Method"
          value={methods}
          onChange={(e) => setMethod(e.target.value)}
          className="card-text"
          cols={30}
          rows={10}
        />
        <input
          name="text"
          required
          placeholder="Cooking Time"
          type="text"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          
        />
        <button className="btn btn-primary p-2 mb-3" type="submit">
          SUBMIT
        </button>
      </form>
    </section>
  );
}

export default Create;
