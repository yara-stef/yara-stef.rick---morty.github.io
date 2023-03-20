import * as React from 'react';
import { Link } from 'react-router-dom';


const CharacterCard = ({ character }) => {
    // console.log(character);

    return (
        <div className='grid-card' key={character.id}>   
            <Link to={`/character/${character.id}`}>
                <img className='card-image' src={character.image}></img>
                <p className='name'>{character.name}</p>                    
                <p className='species'>{character.species }</p>   
            </Link>
                
        </div>
    );
};

export default CharacterCard;