import React from 'react';
function Results({query, results, setRecipeId}){
    let resultData = results.map(function(r){
        return <div className="relative cursor-pointer" onClick={() => setRecipeId(r.id)} key={r.id}>
                    <img className="rounded-md"src={r.image}/>
                    <p className="absolute top-[80%] left-0 right-0 text-white text-center">{r.title}</p>
              </div>;
    });
    return (
        <>
            <h2 className="text-center mt-10 mb-5">Recipes for : <strong>{query}</strong></h2>
            <div className="grid grid-cols-autofit justify-center gap-8">{resultData}</div>
        </>
    );
}
export default Results;