import React from 'react';
function Results({query, results, setRecipeId}){
    let resultData = results.map(function(r){
        return <div className="relative cursor-pointer" onClick={() => setRecipeId(r.id)} key={r.id}>
                    <img className="rounded-md"src={r.image}/>
                    <p className="absolute top-3/4 text-white text-center">{r.title}</p>
              </div>;
    });
    return (
        <main className="border-2 border-black">
            <h2>Recipes for : {query}</h2>
            <div className="flex flex-wrap gap-2 justify-center">{resultData}</div>
        </main>
    );
}
export default Results;