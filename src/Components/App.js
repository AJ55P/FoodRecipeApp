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
      setHomeRecipes({primal_recipes: []});
      try{
        const response_1 = await fetch('/homeRecipes');
        if(!ignore){
          if(!response_1.ok){
            throw new Error(`HTTP Error: ${response_1.status}, ${response_1.statusText}`);
          }
          const recipeData_1 = await response_1.json();
          setHomeRecipes({
            primal_recipes: recipeData_1
          });
        }
      }
      catch(error){
        console.log(error);
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
      try{
        const dishResponse = await fetch('/dish', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({dish_id: currRecipeId})
        });
        if(!dishResponse.ok){
          throw new Error(`HTTP Error: ${dishResponse.status}, ${dishResponse.statusText}`);
        }
        const dishData = await dishResponse.json();
        setRecipe(dishData);
        setView('dish');
      }
      catch(error){
        console.log(error);
      }
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
      try{
        const cuisineResponse = await fetch('/cuisine', {
          method: 'POST',
          headers:{
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({cuisine: currCuisine})
        });
        if(!cuisineResponse.ok){
          throw new Error(`HTTP error: ${cuisineResponse.status}, ${cuisineResponse.statusText}`);
        }
        const cuisineRecipeData = await cuisineResponse.json();
        setCuisineRecipes(cuisineRecipeData);
        setView('cuisine');
      }
      catch(error){
        console.log(error);
      }
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
      try{
        const searchResultsResponse = await fetch('/searchrecipe', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({searchQuery: searchQuery})
        });
        if(!searchResultsResponse.ok){
          throw new Error(`HTTP Error: ${searchResultsResponse.status}, ${searchResultsResponse.statusText}`);
        }
        const resultData = await searchResultsResponse.json();
        setSearchResults(resultData);
        setView('results');
      }
      catch(error){
        console.log(error);
      }
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