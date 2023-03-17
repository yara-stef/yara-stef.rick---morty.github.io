import { useNavigate } from 'react-router-dom';
import arrow from '../arrow.png';

export default function CharacterInfo({ data }) {
    const navigate = useNavigate();
    
    

    return (
        <div className='character-info'>
            <div>
                <button className='back' onClick={() => navigate('/')}><img className='arrow' src={arrow}></img> GO BACK</button>
            </div>            
            <div key={data.id}>
                <img className='character-img' src={data.image} alt=''></img>
                <h1>{data.name}</h1>
                <h3>Informations</h3>
                <div className='information'>
                    <h5>Gender</h5>
                    <p>{data.gender}</p>
                    <hr></hr>
                    <h5>Status</h5>
                    <p>{data.status}</p>
                    <hr></hr>
                    <h5>Specie</h5>
                    <p>{data.species}</p>
                    <hr></hr>
                    <h5>Origin</h5>
                    <p>{ }</p>
                    <hr></hr>
                    <h5>Type</h5>
                    <p>{data.type }</p>
                    <hr></hr>
                </div>
            </div>
        </div>
    )
}