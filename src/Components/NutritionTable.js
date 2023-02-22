import React from 'react';

export default function NutritionTable({nutritionData}){
    // Sliced a smaller subset of nutrient entries for displaying
    nutrition = nutritionData.slice(0, 9);

    tableRows = nutrition.map(function(e, i){
        return <tr className="even:bg-stone-200" key={i}>
                <th scope="row" className="tracking-widest font-Comfortaa text-center p-2">{e.name}</th>
                <td className="p-2 text-center">{e.amount}{e.unit}</td>
                <td className="p-2 text-center">{e.percentOfDailyNeeds}%</td>
              </tr>;
    });

    return (
        <table className="box-shadow-nutrients table-fixed w-full border-collapse">
            <thead className="box-shadow-under">
                <tr>
                    <th scope="col" className="w-1/3 p-2">Name</th>
                    <th scope="col" className="w-1/3 p-2">Amount</th>
                    <th scope="col" className="w-1/3 p-2">Daily Value %</th>
                </tr>
            </thead>
            <tbody className="">
                {tableRows}
            </tbody>
        </table>
    );
}