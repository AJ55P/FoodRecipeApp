import React from 'react';

function Menu(props){
    return (
        <header className="flex flex-col flex-wrap gap-5">
        <a>LogoHome</a>
            <input className="bg-slate-700 rounded text-lg text-white font-comfortaa" typeof="text" placeholder="What do you want to eat?"></input>
            <nav>
                <ul className="flex flex-row flex-wrap gap-7 justify-between">
                    <li><a>Mexican</a></li>
                    <li><a>Italian</a></li>
                    <li><a>American</a></li>
                    <li><a>Chinese</a></li>
                    <li><a>Greek</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Menu;