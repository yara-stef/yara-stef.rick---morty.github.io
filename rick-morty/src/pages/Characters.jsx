import { useCharacters } from "../hooks/useCharacters";
import logo from '../rick-morty.png';

export default function Characters() {
    const { characters, loading, error } = useCharacters();
    console.log(characters);

    if (loading) {
        return <p>data is loading</p>
    }
    if (error) {
        return <p>something went wrong</p>
    }
    
    return (
        <img src={logo}></img>
    )
}