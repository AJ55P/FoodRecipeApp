import express from 'express';
import fetch from 'node-fetch';
import path from 'path';
import url from 'url';
import * as dotenv from 'dotenv';
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

const appPath = path.join(url.fileURLToPath(import.meta.url), '../prodBuild/index.html');

app.use(express.json());
app.use(express.static('prodBuild'));

app.get('/', (req, res, next) => {
  res.sendFile(`${appPath}`, (error) => {
    if(error){
      next(error);
    }
    else{
      console.log('The React App was sent!');
    }
  });
});

// The home recipes api !
app.get('/homeRecipes', async function foo(req, res, next){
    try{
        const response_1 = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.FOOD_KEY}&diet=primal&instructionsRequired=true&addRecipeInformation=true&sort=popularity&addRecipeNutrition=true&number=6`);
        if(!response_1.ok){
            throw new Error(`HTTP error! Status: ${response_1.status}, ${response_1.statusText}`);
        }
        const recipeData_1 = await response_1.json();
        res.json(recipeData_1.results);
    }
    catch(error){
        console.log(error);
        res.json('Could not receive the home recipes!');
        //This middleware will pass on the error message to the error handler!
        //next(error);
    }
});

// The fetch dish recipe api! 
app.post('/dish', async (req, res) =>{
  // sanitize this!
  let dish_id = req.body.dish_id;
  try{
      const response_1 = await fetch(`https://api.spoonacular.com/recipes/${dish_id}/information?apiKey=${process.env.FOOD_KEY}&instructionsRequired=true&includeNutrition=true`);
      if(!response_1.ok){
        throw new Error(`HTTP error: ${response_1.status} ${response_1.statusText}`);
      }
      const dishX_data = await response_1.json();
      res.json(dishX_data);
  }
  catch(error){
    console.log(error);
    res.json("Could not receive the dish recipe");
  }
});

// The cuisine specific recipes api! 
app.post('/cuisine', async (req, res) =>{
  // sanitize this!
  let cuisineX = req.body.cuisine.toString();
  try{
      const response_1 = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.FOOD_KEY}&cuisine=${cuisineX}&instructionsRequired=true&number=10`);
      if(!response_1.ok){
        throw new Error(`HTTP error: ${response_1.status} ${response_1.statusText}`);
      }
      const cuisineX_data = await response_1.json();
      res.json(cuisineX_data.results);
  }
  catch(error){
    console.log(error);
    res.json("Could not receive the cuisine recipes");
  }
});

// The recipe search results api! 
app.post('/searchrecipe', async (req, res) =>{
  // sanitize this!
  let recipeX = req.body.searchQuery.toString();
  try{
      const response_1 = await fetch(`https://api.spoonacular.com/recipes/complexSearch/?apiKey=${process.env.FOOD_KEY}&query=${recipeX}&instructionsRequired=true&number=10`);
      if(!response_1.ok){
        throw new Error(`HTTP error: ${response_1.status} ${response_1.statusText}`);
      }
      const results_data = await response_1.json();
      res.json(results_data.results);
  }
  catch(error){
    console.log(error);
    res.json("Could not receive the dish recipe results");
  }
});

app.listen(PORT, ()=>{
    console.log(`recipeApp/api server listening on port:${PORT}`);
});