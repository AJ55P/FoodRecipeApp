import React from 'react';
function Main({homeRecipes, setRecipeId}){
    // These breakfast recipes would be for the carousel!
    // let breakfast_recipes = homeRecipes.breakfast_recipes;
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
        <>
            <h2 className="text-center mt-4 mb-4">Popular Primal Recipes</h2>
            <div className="grid grid-cols-autofit gap-4">
                {recipeItems}
            </div>
            {/* Potential Carousel Here! */}
            {/* <Carousel /> */}
        </>
    );
}
export default Main;