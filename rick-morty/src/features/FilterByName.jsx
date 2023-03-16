import * as React from 'react';
import { useState } from 'react';
import icon from '../search-icon.png';

function FilterByName() {
    
    return (
        <div>
             <input
                type='text'
                placeholder='Filter By Name'
            >
                
            </input><img src={ icon }></img>
        </div>
    )
};

export default FilterByName;