import * as React from 'react';
import { Link, useNavigate } from 'react-router-dom';


const CharacterCard = ({ character }) => {
    
    const navigate = useNavigate();

    return (
        <div className='grid-card' key={character.id}>
            <div>
                <img src={character.image}></img>
                <p>{character.name}</p>
                <p>{character.species }</p>
            </div>
           
        </div>
    );
};

export default CharacterCard;