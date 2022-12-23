import React from 'react';
import { HiOutlineMagnifyingGlass } from 'react-icons/hi2';

function Search({onSearch}){
    return (
        <div className="rounded relative max-w-lg mx-auto mt-5">
            <HiOutlineMagnifyingGlass onClick={() => onSearch(() =>{return document.querySelector("#searchBar").value} )} className="absolute top-1 left-1 h-6 w-6"/>
            <input id="searchBar" onKeyDown={e => {
                if(e.key === 'Enter'){
                    onSearch(e.target.value);
                }}} className="w-full rounded border-solid border-2 border-indigo-600 pl-7 text-lg text-black font-comfortaa" typeof="text" placeholder="What's for breakfast/lunch/dinner?"></input>
        </div>
    );
}

export default Search;