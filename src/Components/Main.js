import React from 'react';
import {Slider} from './Slider';

function Main({homeRecipes, setRecipeId}){
    let breakfast_recipes = homeRecipes.breakfast_recipes;
    let primal_recipes = homeRecipes.primal_recipes;
    let recipeItems = primal_recipes.map(function(r){
        return <div onClick={() => setRecipeId(r.id)} className="group hover:scale-105 transition-transform shadow-2xl cursor-pointer flex flex-col flex-wrap justify-around items-center first-letter:cursor-pointer" key={r.id}>
                    <img className="rounded-md max-w-full" src={r.image}/>
                    <h3 className="font-bold text-center">{r.title}</h3>
                    <p className="text-sm">DishType: {r.dishTypes[0]}</p>
                    <p className="text-sm">Servings: {r.servings}</p>
                    <button type="button" className="transition-colors group-hover:bg-red-600 group-hover:text-white text-red-600 border-solid border-2 border-red-600 rounded-md p-1">View Recipe</button>
              </div>;
    });
    return (
        <main className="">
            <section className="max-w-5xl mx-auto">
                <h2 className="text-center mt-4 mb-4">Popular Primal Recipes</h2>
                <div className="grid grid-cols-3 gap-4">
                    {recipeItems}
                </div>
            </section>
            <div className="max-w-5xl mx-auto mt-32">
                <h2 className="text-center mb-6">Random Breakfast!</h2>
                <Slider breakfastItems={breakfast_recipes}/>    
            </div>
        </main>
    );
}
export default Main;