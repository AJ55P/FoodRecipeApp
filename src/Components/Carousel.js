import React from 'react';
import {Slider} from './Slider';
function Carousel(){
    return(
        <div className="max-w-5xl mx-auto mt-32">
            <h2 className="text-center mb-6">Random Breakfast!</h2>
            <Slider breakfastItems={breakfast_recipes}/>    
        </div>
    );
}
export default Carousel;