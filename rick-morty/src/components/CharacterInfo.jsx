import { useNavigate } from 'react-router-dom';

export default function CharacterInfo({ data }) {
    const navigate = useNavigate();

    return (
        <div>
            <button onClick={() => navigate('/')}>← GO BACK</button>
            <div key={data.id}>
                <img src={data.image} alt=''></img>
                <h1>{data.name}</h1>
                <h3>Informations</h3>
                <div>
                    <h5>Gender</h5>
                    <p>{data.gender}</p>
                    <h5>Status</h5>
                    <p>{data.status}</p>
                    <h5>Specie</h5>
                    <p>{data.species}</p>
                    <h5>Origin</h5>
                    <p></p>
                    <h5>Type</h5>
                    <p>{data.type }</p>
                </div>
            </div>
        </div>
    )
}