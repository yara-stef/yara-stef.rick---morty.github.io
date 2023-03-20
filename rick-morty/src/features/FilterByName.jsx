import * as React from 'react';
import { useState, useEffect } from 'react';
import { useCharacters } from "../hooks/useCharacters";

function FilterByName({filter, setQuery}) {
    // const { characters } = useCharacters();
    // console.log(characters.results)
    // const [query, setQuery] = useState('');
    // const [filter, setFilter] = useState([]);
    // console.log(query);

    // useEffect(() => {
    //     fetch(`https://rickandmortyapi.com/api/character/?name=${query}`)
    //         .then(response => response.json())
    //         .then(characters => setFilter(characters.results.name));
    // }, [query]);
    return (
        <div>
            <form className='search'>
             <input className='filter'
                type='search'
                placeholder='Filter by name...' 
                onChange={(e) => setQuery(e.target.value)}
            >                
            </input>
            </form>
            <div>{ filter }</div>
        </div>
        
    )
};

export default FilterByName;