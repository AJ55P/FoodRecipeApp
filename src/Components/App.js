import React, { useState, useEffect } from 'react';
import Search from './Search';
import Menu from './Menu';
import Main from './Main';
import Dish from './Dish';

function App () {
  // const [currView, setView] = useState('home');
  const [currRecipe, setRecipe] = useState([]);
  const [homeRecipes, setHomeRecipes] = useState([]);

  useEffect(() => {
    async function fetchHomeRecipes(){
      const response = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.FOOD_KEY}&diet=vegetarian&instructionsRequired=true&number=6`);
      const recipeData = await response.json();
      setHomeRecipes(recipeData.results);
    }
    fetchHomeRecipes();
  }, []);
  useEffect(() => {
    async function fetchDish(){
        const dishResponse = await fetch(`https://api.spoonacular.com/recipes/${currRecipe}/information?apiKey=${process.env.FOOD_KEY}&includeNutrition=true`);
        const dishData = await dishResponse.json();
        setRecipe(dishData);
    }
    fetchDish();
  }, [currRecipe]);

  return (
    <>
      <Search/>
      <Menu/>
      {currRecipe == [] ? 
        <Main 
          setRecipe={setRecipe} 
          homeRecipes={homeRecipes} /> 
          : 
        <Dish dish={currRecipe}/>
      }
    </>
  )
}
export default App;