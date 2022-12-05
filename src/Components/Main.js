import React from 'react';

function Main(props){
    let recipes = props.homeRecipes;
    let recipeItems = recipes.map(function(r,i){
        return <div className="relative cursor-pointer" onClick={() => props.setRecipe(r.id)} key={i}>
                <img className="rounded-md"src={r.image}/>
                <p className="absolute top-3/4 text-white text-center">{r.title}</p>
                </div>;
    });
    return (
        <main className="border-2 border-black">
            <h2 className="text-center">Vegetarian!</h2>
            <div className="flex flex-wrap gap-2 justify-center">{recipeItems}</div>
        </main>
    );
}
export default Main;