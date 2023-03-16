import { useCharacters } from "../hooks/useCharacters";
import CharacterCard from "../components/CharacterCard";

const CharacterList = () => {
    const { characters } = useCharacters();
    const guys = characters.results;
    console.log(guys);
    return (
        <div>
            {
                guys.map((guy) => {
                    return <CharacterCard data={guy} />
                })
           }
            {/* {
                charactersArr.map((character, key) => {
                    return <CharacterCard data={character} key={character.id} />
                })
            } */}
        </div>
    );
};

export default CharacterList;