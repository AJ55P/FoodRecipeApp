import React from 'react';
// import Pizza from '../images/pizza-svgrepo-com.svg';
// import Pizza from "jsx:../images/pizza-svgrepo-com.svg";
import { CiPizza } from 'react-icons/ci';

function Menu(){
    return (
        <nav className="mt-3">
            <ul className="flex flex-row flex-wrap justify-center gap-2">
                <li className="bg-gradient-to-r from-orange-200 to-red-200
                cursor-grab flex flex-col h-16 w-16 scale-90 items-center justify-center rounded-full">
                    <CiPizza className="text-2xl"/>
                    <a className="text-sm">American</a>
                </li>
                <li className="cursor-grab flex flex-col h-16 w-16 scale-90 items-center justify-center rounded-full 
                bg-gradient-to-r from-orange-200 to-red-200">
                    <CiPizza className="text-2xl"/>
                    <a className="text-sm">Mexican</a>
                </li>
                <li className="cursor-grab flex flex-col h-16 w-16 scale-90 items-center justify-center rounded-full 
                bg-gradient-to-r from-orange-200 to-red-200">
                    <CiPizza className="text-2xl"/>
                    <a className="text-sm">Greek</a>
                </li>
                <li className="cursor-grab flex flex-col h-16 w-16 scale-90 items-center justify-center rounded-full 
                bg-gradient-to-r from-orange-200 to-red-200">
                    <CiPizza className="text-2xl"/>
                    <a className="text-sm">Italian</a>
                </li>
            </ul>
        </nav>
    );
}
export default Menu; 