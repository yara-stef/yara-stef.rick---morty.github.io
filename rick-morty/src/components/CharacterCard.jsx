import * as React from 'react';
import { Link } from 'react-router-dom';


const CharacterCard = ({ character }) => {
    console.log(character);

    return (
        <div className='grid-card' key={character.id}>           
                <img className='card-image' src={character.image}></img>
                
                    <Link to={`/character/${character.id}`}>
                        <p className='name'>{character.name}</p>
                    </Link>
                <p className='species'>{character.species }</p>   
        </div>
    );
};

export default CharacterCard;