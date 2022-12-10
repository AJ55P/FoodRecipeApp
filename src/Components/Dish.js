import React from 'react';

function Dish({currRecipe}){
    let ingredientsUsed = [];
    let directions = [];

    if(currRecipe != null){
        ingredientsUsed = currRecipe.extendedIngredients.map(e => 
            <li key={e.id}>
                {e.original}
            </li>
        );
        directions = currRecipe.analyzedInstructions[0].steps.map(e => 
            <li key={e.number}>
                {e.step}
            </li>
        );
    }
    return (
        <div>
            {currRecipe && <h1 className="text-2xl text-center">{currRecipe.title}</h1>}
            <div>
                <h2>Ingredients</h2>
                <ul className="list-disc">{ingredientsUsed}</ul>
            </div>
            {currRecipe && <img alt={currRecipe.title} src={currRecipe.image}></img>}
            <div>
                <h2>Directions</h2>
                <ul className="list-disc">{directions}</ul>
            </div>
        </div>
    )
}
export default Dish;