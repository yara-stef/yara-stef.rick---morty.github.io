import * as React from 'react';

function FilterByName({ setQuery }) {

    const handleChange = (e) => {
        e.preventDefault();
        const queryCharacter = e.target.value.toLowerCase();
        if (queryCharacter.length > 1) {
            setQuery(queryCharacter);
        }
        if (!queryCharacter.length) {
            setQuery('');
        }
    }
    
    return (
        <div>
            <form className='search'>
             <input className='filter'
                type='search'
                placeholder='Filter by name...' 
                onChange={handleChange}
            >                
            </input>
            </form>
        </div>
        
    )
};

export default FilterByName;