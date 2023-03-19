import * as React from 'react';
import { useState } from 'react';

function FilterByName() {
    const [query, setQuery] = useState('');
    console.log(query);
    return (
        <form className='search'>
             <input className='filter'
                type='search'
                placeholder='Filter by name...'
                onChange={(e) => setQuery(e.target.value)}
            >                
            </input>
        </form>
    )
};

export default FilterByName;