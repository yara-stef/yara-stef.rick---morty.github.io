import * as React from 'react';
import { Link } from 'react-router-dom';


const CharacterCard = ({ character }) => {
    console.log(character);

    return (
        <div className='grid-card' key={character.id}>
            <div>
                <img src={character.image}></img>
                
                    <Link to={`/character/${character.id}`}>
                        <p>{character.name}</p>
                    </Link>
                <p>{character.species }</p>
            </div>
           
        </div>
    );
};

export default CharacterCard;