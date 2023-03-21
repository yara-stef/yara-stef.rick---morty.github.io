import { useState, useEffect } from "react";
import { useCharacters } from "../hooks/useCharacters";
import FilterByName from "../features/FilterByName";
import CharacterList from "../features/CharacterList";
import logo from '../rick-morty.png';

export default function Characters() {
    
    const [query, setQuery] = useState('');
    const { characters, loading, error } = useCharacters(query);
    console.log(characters);
    const [savedCharacters, setSavedCharacters] = useState(characters);

    

    useEffect(() => {
        localStorage.setItem('savedCharacters', JSON.stringify(savedCharacters));
    }, [savedCharacters]);
    
useEffect(() => {
        const characters = JSON.parse(localStorage.getItem('savedCharacters'));
        if (characters) {
            setSavedCharacters(savedCharacters);
        }
    }, []);
   
    
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