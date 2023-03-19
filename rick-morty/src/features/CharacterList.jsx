import { useCharacters } from "../hooks/useCharacters";
import CharacterCard from "../components/CharacterCard";

const CharacterList = ({data}) => {
    // const { characters } = useCharacters();
    // console.log(characters);
    // console.log(characters.results);
    console.log(data.results)
    return (   
        <div className="grid-container">
            
            {
                data.results && data.results.sort(function (a, b) {
                    if (a.name < b.name) {
                        return -1;
                    }
                    if (a.name > b.name) {
                        return 1;
                    }
                    return 0;
                }).map((character) => {
                    return (
                        <CharacterCard character={character} key={character.id} />
                    )
                })
               
           }
            
        </div>
    );
};

export default CharacterList;