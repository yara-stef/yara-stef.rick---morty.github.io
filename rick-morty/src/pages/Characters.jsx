import { useState, useEffect } from "react";
import { useCharacters } from "../hooks/useCharacters";
import FilterByName from "../features/FilterByName";
import CharacterList from "../features/CharacterList";
import logo from '../rick-morty.png';

export default function Characters() {
    
    const [query, setQuery] = useState('');
    const { characters, loading, error } = useCharacters(query);
    console.log(characters);
    const [filter, setFilter] = useState([]);
    

    // useEffect(() => {
    //     const fetchCharacters = async () => {
    //         const response = await fetch(`https://rickandmortyapi.com/api/character/?name=${query}`);
    //         setFilter(response.data);
    //     };
        
    //     fetchCharacters();
    // }, [query]);
    
    if (loading) {
        // return <p>data is loading</p>
    }
    if (error) {
        return <p>something went wrong</p>
    }
    
    return (
        <div>
            <img className="logo" src={logo}></img>
            <FilterByName  setQuery={setQuery} />
            <CharacterList data={characters} />
        </div>
        
    )
}