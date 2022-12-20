import React, { useState, useEffect, useRef } from 'react';
import Search from './Search';
import Menu from './Menu';
import Main from './Main';
import Dish from './Dish';
import Cuisine from './Cuisine';

function App () {
  const dishDidMount = useRef(false);
  const cuisineDidMount = useRef(false);
  // const resultsDidMount = useRef(false);
  const [currView, setView] = useState('home');
  const [currRecipeId, setRecipeId] = useState(null);
  const [currRecipe, setRecipe] = useState(null);
  const [currCuisine, setCuisine] = useState(null);
  const [currCuisineRecipes, setCuisineRecipes] = useState([]);
  const [homeRecipes, setHomeRecipes] = useState([]);
  // const [searchResultRecipes, setSearchResultRecipes] = useState([]);
  // fetch the home page recipes once ! 
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

  // fetch the chosen recipe !
  useEffect(() => {
    async function fetchDish(){
        const dishResponse = await fetch(`https://api.spoonacular.com/recipes/${currRecipeId}/information?apiKey=${process.env.FOOD_KEY}&instructionsRequired=true&includeNutrition=true`);
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

  // fetch the selected cuisine recipes !
  useEffect(() =>{
    async function fetchCuisineRecipes(){
      const cuisineResponse = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.FOOD_KEY}&cuisine=${currCuisine}&instructionsRequired=true&number=10`)
      const cuisineRecipeData = await cuisineResponse.json();
      setCuisineRecipes(cuisineRecipeData.results);
      setView('cuisine');
    }
    if(cuisineDidMount.current){
      fetchCuisineRecipes();
    }
    else{
      cuisineDidMount.current = true;
    }
  }, [currCuisine]);

  // // fetch the search result recipes!
  // useEffect(() =>{
  //   async function fetchSearchResultRecipes(){
  //     const searchResultResponse = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.FOOD_KEY}&cuisine=${currCuisine}&number=50`)
  //     const searchResultData = await searchResultResponse.json();
  //     setSearchResultRecipes(searchResultData.results);
  //     setView('results');
  //   }
  //   if(resultsDidMount.current){
  //     fetchSearchResultRecipes();
  //   }
  //   else{
  //     resultsDidMount.current = true;
  //   }
  // }, [searchResultRecipes]);

  function getViewComponent(){
    switch(currView) {
      case 'home':
        return <Main homeRecipes={homeRecipes} setRecipeId={setRecipeId} />;
      case 'dish':
        return <Dish currRecipe={currRecipe} />;
      case 'cuisine':
        return <Cuisine currCuisine={currCuisine} currCuisineRecipes={currCuisineRecipes} setRecipeId={setRecipeId} />;
      default:
        return <Main homeRecipes={homeRecipes} setRecipeId={setRecipeId} />;
    }
  }

  return (
    <>
      <h1 className="cursor-grab" onClick={()=> setView('home')}>Home</h1>
      <Search />
      <Menu setCuisine={setCuisine}/>
      {getViewComponent()}
    </>
  )
}
export default App;