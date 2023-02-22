import React from 'react';
import { HiOutlineMagnifyingGlass } from 'react-icons/hi2';

function Search({onSearch}){
    return (
        <div className="rounded relative max-w-lg mx-auto mt-5">
            <HiOutlineMagnifyingGlass onClick={() =>{
                let queryValue = document.querySelector("#searchBar").value;
                document.querySelector("#searchBar").value = '';
                onSearch(queryValue);}} className="absolute top-1 left-1 h-6 w-6"/>
            <input id="searchBar" onKeyDown={e => {
                if(e.key === 'Enter'){
                    let queryValue = e.target.value;
                    e.target.value = '';
                    onSearch(queryValue);
                }}} className="w-full rounded-full border-solid border-2 border-black pl-7 text-lg text-black font-comfortaa" typeof="text" placeholder="What's for breakfast/lunch/dinner?"></input>
        </div>
    );
}

export default Search;