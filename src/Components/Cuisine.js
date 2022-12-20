import React from 'react';
function Cuisine({currCuisine, currCuisineRecipes, setRecipeId}){
    let resultData = currCuisineRecipes.map(function(r){
        return <div className="relative cursor-pointer" onClick={() => setRecipeId(r.id)} key={r.id}>
                    <img className="rounded-md"src={r.image}/>
                    <p className="absolute top-3/4 text-white text-center">{r.title}</p>
              </div>;
    });
    return (
        <main className="border-2 border-black">
            <h2>{currCuisine} Dish Recipes</h2>
            <div className="flex flex-wrap gap-2 justify-center">{resultData}</div>
        </main>
    );
}
export default Cuisine;