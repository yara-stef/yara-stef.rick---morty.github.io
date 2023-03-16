import * as React from 'react';
import { Link } from 'react-router-dom';


const CharacterCard = ({ data }) => {
    

    return (
        <div className='grid-card' key={data.id}>
            <div>
                <img src={data.image}></img>
                
                    <Link to={`/character/${data.id}`}>
                        <p>{data.name}</p>
                    </Link>
                <p>{data.species }</p>
            </div>
           
        </div>
    );
};

export default CharacterCard;