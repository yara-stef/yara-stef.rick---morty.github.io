import * as React from 'react';
import { useState } from 'react';

function FilterByName() {
    
    return (
        <form className='search'>
             <input className='filter'
                type='search'
                placeholder='Filter by name...'
            >                
            </input>
        </form>
    )
};

export default FilterByName;