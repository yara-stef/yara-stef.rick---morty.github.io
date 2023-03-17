import * as React from 'react';
import { useState } from 'react';
import icon from '../search-icon.png';

function FilterByName() {
    
    return (
        <form className='search'>
             <input className='filter'
                type='search'
                placeholder='Filter by name...'
            >                
            </input>
            <button type='submit'></button>
            {/* <img src={icon}></img> */}
        </form>
    )
};

export default FilterByName;