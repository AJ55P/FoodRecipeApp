import React from 'react';

function Main({homeRecipes, setRecipeId}){
    let recipes = homeRecipes;
    let recipeItems = recipes.map(function(r){
        return <div className="relative cursor-pointer" onClick={() => setRecipeId(r.id)} key={r.id}>
                    <img className="rounded-md"src={r.image}/>
                    <p className="absolute top-3/4 text-white text-center">{r.title}</p>
              </div>;
    });
    return (
        <main className="border-2 border-black">
            <div className="flex flex-wrap gap-2 justify-center">
                <h2 className="text-center">Primals</h2>
                {recipeItems}
            </div>
            <div>
                <h2>Vegeterian</h2>
            </div>
            <div>
                <h2>Vegan</h2>
            </div>
            <div>
                <h2>Deserts</h2>
            </div>
        </main>
    );
}
export default Main;