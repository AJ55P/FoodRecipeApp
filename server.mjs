import express from 'express';
import fetch from 'node-fetch';
import * as dotenv from 'dotenv';
dotenv.config();
const app = express();
const PORT = 3000;


app.use(express.json());

// The home recipes api !
app.get('/', async function foo(req, res, next){
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
        res.send('Could not receive the home recipes!');
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
      console.log(dishX_data);
      res.json(dishX_data);
  }
  catch(error){
    console.log(error);
    res.json("Could not receive the dish recipe");
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
      console.log(dishX_data);
      res.json(dishX_data);
  }
  catch(error){
    console.log(error);
    res.json("Could not receive the dish recipe");
  }
});



// app.get('/', async (req, res) =>{
//     try{
//         const response_1 = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.FOOD_KEY}&diet=primal&instructionsRequired=true&addRecipeInformation=true&sort=popularity&addRecipeNutrition=true&number=6`);
//         if(!ignore){
//           const recipeData_1 = await response_1.json();
//           setHomeRecipes({
//             primal_recipes: recipeData_1.results
//           });
//         }
//       }
//       catch(error){
//         console.log('Could not receive the home recipes!');
//       }
//       res.json()
// });

app.listen(PORT, ()=>{
    console.log(`recipeApp/api server listening on localhost:${PORT}`);
});