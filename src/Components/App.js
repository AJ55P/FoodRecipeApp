import React, { useState, useEffect, useRef } from 'react';
import Search from './Search';
import Menu from './Menu';
import Main from './Main';
import Dish from './Dish';
import Results from './Results';
import { GiTacos } from 'react-icons/gi';
import { GiShrimp } from 'react-icons/gi';

function App () {
  const dishDidMount = useRef(false);
  const cuisineDidMount = useRef(false);
  const resultsDidMount = useRef(false);
  const [currView, setView] = useState('home');
  const [currRecipeId, setRecipeId] = useState(null);
  const [currRecipe, setRecipe] = useState(null);
  const [currCuisine, setCuisine] = useState(null);
  const [currCuisineRecipes, setCuisineRecipes] = useState([]);
  const [homeRecipes, setHomeRecipes] = useState({primal_recipes: []});
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  // fetch the home page recipes once ! 
  useEffect(() => {
    async function fetchHomeRecipes(){
      setHomeRecipes({primal_recipes: [], breakfast_recipes: []});
      try{
        const response_1 = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.FOOD_KEY}&diet=primal&instructionsRequired=true&addRecipeInformation=true&sort=popularity&addRecipeNutrition=true&number=6`);
        if(!ignore){
          const recipeData_1 = await response_1.json();
          setHomeRecipes({
            primal_recipes: recipeData_1.results
          });
        }
      }
      catch(error){
        console.log('Could not receive the home recipes!');
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

  // fetch the search result recipes!
  useEffect(() =>{
    async function fetchSearchResultRecipes(){
      const searchResultsResponse = await fetch(`https://api.spoonacular.com/recipes/complexSearch/?apiKey=${process.env.FOOD_KEY}&query=${searchQuery}&instructionsRequired=true&number=10`);
      const resultData = await searchResultsResponse.json();
      setSearchResults(resultData.results);
      setView('results');
    }
    if(resultsDidMount.current){
      fetchSearchResultRecipes();
    }
    else{
      resultsDidMount.current = true;
    }
  }, [searchQuery]);

  function getViewComponent(){
    switch(currView) {
      case 'home':
        return <Main homeRecipes={homeRecipes} setRecipeId={setRecipeId} />;
      case 'dish':
        return <Dish currRecipe={currRecipe} />;
      case 'cuisine':
        return <Results query={currCuisine} results={currCuisineRecipes} setRecipeId={setRecipeId} />;
      case 'results':
        return <Results query={searchQuery} results={searchResults} setRecipeId={setRecipeId} />;
      default:
        return <Main homeRecipes={homeRecipes} setRecipeId={setRecipeId} />;
    }
  }

  return (
    <>
      <button className="text-3xl mx-auto max-w-max mb-10 mt-2 block" onClick={()=> setView('home')}><GiTacos className="inline-block scale-125" /> Bon Appetito! <GiShrimp className="inline-block scale-125 translate-x-1"/></button>
      <Search onSearch={setSearchQuery}/>
      <Menu setCuisine={setCuisine}/>
      <main className="max-w-5xl mx-auto">{getViewComponent()}</main>
    </>
  )
}
export default App;