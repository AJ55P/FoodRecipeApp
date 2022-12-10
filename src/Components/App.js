import React, { useState, useEffect, useRef } from 'react';
import Search from './Search';
import Menu from './Menu';
import Main from './Main';
import Dish from './Dish';

function App () {
  const dishDidMount = useRef(false);
  const [currView, setView] = useState('home');
  const [currRecipeId, setRecipeId] = useState(null);
  const [currRecipe, setRecipe] = useState(null);
  const [homeRecipes, setHomeRecipes] = useState([]);

  useEffect(() => {
    async function fetchHomeRecipes(){
      setHomeRecipes([]);
      const response = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.FOOD_KEY}&diet=primal&instructionsRequired=true&number=6`);
      if(!ignore){
        const recipeData = await response.json();
        setHomeRecipes(recipeData.results);
      }
    }
    let ignore = false;
    fetchHomeRecipes();
    return () => {
      ignore = true;
    }
  }, []);

  useEffect(() => {
    async function fetchDish(){
        const dishResponse = await fetch(`https://api.spoonacular.com/recipes/${currRecipeId}/information?apiKey=${process.env.FOOD_KEY}&includeNutrition=true`);
        const dishData = await dishResponse.json();
        setRecipe(dishData);
        setView('dish');
    }
    if(dishDidMount.current){
      fetchDish();
    }
    else{
      dishDidMount.current = true;
    }
  }, [currRecipeId]);

  return (
    <>
      <Search />
      <Menu />
      {currView == 'home' ? (
        <Main homeRecipes={homeRecipes} setRecipeId={setRecipeId} />
      ) : (
        <Dish currRecipe={currRecipe} />
      )} 
    </>
  )
}
export default App;