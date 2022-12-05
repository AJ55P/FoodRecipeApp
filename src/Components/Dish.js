import React from 'react';

function Dish(props){
    const ingredientsUsed = props.dish.extendedIngredients.map((e, index) => {
        <li key={e.id}>{e.original}</li>;
    });
    <div>
        <h1>{props.dish.title}</h1>
        <div>
            <h2>Ingredients</h2>
            <ul>{ingredientsUsed}</ul>
        </div>
        <img src={props.dish.image}></img>
        <div>
            <h2>Directions</h2>
        </div>

    </div>

}

export default Dish;