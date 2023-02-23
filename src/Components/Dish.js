import React from 'react';
import TabInfoBox from './TabInfoBox';

function Dish({currRecipe}){
    let ingredients = [];
    let directions = [];
    let nutritionData = [];

    if(currRecipe != null){
        nutritionData = currRecipe.nutrition.nutrients;
        ingredients = currRecipe.extendedIngredients.map(e => 
            <li className="marker:text-sky-400 leading-9 list-disc mb-1" key={e.id}>
                {e.original}
            </li>
        );
        /* This condition is here because spoonacular gives recipes without instructions, even with the 
        "instructionsRequired" parameter set to true!
        */
        if(currRecipe.analyzedInstructions.length > 0){
            directions = currRecipe.analyzedInstructions[0].steps.map(e => 
                <li className="list-decimal mb-5" key={e.number}>
                    {e.step}
                </li>
            );
        }
    }
    return (
        <>
            <header className="mt-7 mb-5">
                {currRecipe && <h1 className=" text-2xl text-center">{currRecipe.title}</h1>}
            </header>
            <div className="grid grid-cols-autofit justify-center gap-x-10 gap-y-5">
                {currRecipe && <img className="justify-self-end rounded-md" alt={currRecipe.title} src={currRecipe.image}></img>}
                <TabInfoBox ingredients={ingredients} directions={directions} nutritionData={nutritionData}/>
            </div>
        </>
    )
}
export default Dish;