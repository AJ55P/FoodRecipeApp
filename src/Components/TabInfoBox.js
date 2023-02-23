import {useState, React} from 'react';
import NutritionTable from './NutritionTable';

export default function TabInfoBox({ingredients, directions, nutritionData}){
    const [currTab, setTab] = useState('ingredients');
    return (
        <section>
            <ul className="flex flex-wrap justify-around mb-5">
                <li onClick = {() => setTab('ingredients')} className="cursor-pointer text-center"><a href="#" className={`${currTab === 'ingredients' ? 'active-tab': ""} inline-block w-full p-1 text-center hover:bg-blue-500 hover:text-white focus:text-white focus:bg-blue-500 rounded-md`}>Ingredients</a></li>
                <li onClick = {() => setTab('directions')} className="cursor-pointer text-center"><a href="#" className={`${currTab === 'directions' ? 'active-tab': ""} w-full inline-block text-center p-1 hover:bg-blue-500 hover:text-white focus:bg-blue-500 focus:text-white rounded-md`}>Directions</a></li>
                <li onClick = {() => setTab('health_facts')} className="cursor-pointer text-center"><a href="#" className={`${currTab === 'health_facts' ? 'active-tab': ""} w-full inline-block text-center p-1 hover:bg-blue-500 hover:text-white focus:bg-blue-500 focus:text-white rounded-md`}>Health Facts</a></li>
            </ul>
            <div>
                {currTab === 'ingredients' ? <article className="bg-white max-w-lg mx-auto"><ul className="list-disc pl-12">{ingredients}</ul> </article> : ""}
                {currTab === 'directions' ?<article className="bg-white max-w-lg mx-auto"><ul className="list-disc pl-12">{directions}</ul></article> : ""}
                {currTab === 'health_facts' ? <article className="bg-white max-w-lg mx-auto"><NutritionTable nutritionData ={nutritionData}/></article> : ""}
            </div>
        </section>
    );
}
