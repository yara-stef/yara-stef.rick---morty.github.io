import { useCharacters } from "../hooks/useCharacters";
import FilterByName from "../features/FilterByName";
import CharacterList from "../features/CharacterList";
import logo from '../rick-morty.png';

export default function Characters() {
    
    const { characters, loading, error } = useCharacters();
   console.log(characters)

    if (loading) {
        return <p>data is loading</p>
    }
    if (error) {
        return <p>something went wrong</p>
    }
    
    return (
        <div>
            <img src={logo}></img>
            <FilterByName />
            <CharacterList data={characters} />
        </div>
        
    )
}