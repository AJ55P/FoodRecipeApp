import React from 'react';
import { CiPizza } from 'react-icons/ci';
import { FaPepperHot } from 'react-icons/fa';
import { GiOlive } from 'react-icons/gi';
import { GiHamburger } from 'react-icons/gi';

function Menu({setCuisine}){
    return (
        <nav className="mt-3">
            <ul className="flex flex-row flex-wrap justify-center gap-2">
                <li onClick={()=> setCuisine('american')} className="bg-gradient-to-r from-orange-200 to-red-200
                cursor-grab flex flex-col h-16 w-16 scale-90 items-center justify-center rounded-full">
                    <GiHamburger className="text-2xl"/>
                    <a className="text-sm">American</a>
                </li>
                <li onClick={()=> setCuisine('mexican')} className="cursor-grab flex flex-col h-16 w-16 scale-90 items-center justify-center rounded-full 
                bg-gradient-to-r from-orange-200 to-red-200">
                    <FaPepperHot className="text-2xl"/>
                    <a className="text-sm">Mexican</a>
                </li>
                <li onClick={()=> setCuisine('greek')} className="cursor-grab flex flex-col h-16 w-16 scale-90 items-center justify-center rounded-full 
                bg-gradient-to-r from-orange-200 to-red-200">
                    <GiOlive className="text-2xl"/>
                    <a className="text-sm">Greek</a>
                </li>
                <li onClick={()=> setCuisine('italian')} className="cursor-grab flex flex-col h-16 w-16 scale-90 items-center justify-center rounded-full 
                bg-gradient-to-r from-orange-200 to-red-200">
                    <CiPizza className="text-2xl"/>
                    <a className="text-sm">Italian</a>
                </li>
            </ul>
        </nav>
    );
}
export default Menu; 