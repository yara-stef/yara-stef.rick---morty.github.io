import { useCharacters } from "../hooks/useCharacters";
import CharacterCard from "../components/CharacterCard";

const CharacterList = () => {
    const { characters } = useCharacters();
    console.log(characters);
    return (
        <div>
            <CharacterCard character={characters} />
            {/* {
                characters.map((character, key) => {
                    return <CharacterCard character={character} key={character.id} />
                })
            } */}
        </div>
    );
};

export default CharacterList;