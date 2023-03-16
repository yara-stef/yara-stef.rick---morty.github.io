import CharacterInfo from "../components/CharacterInfo";
import { useCharacterDetails } from '../hooks/useCharacterDetails';
import { useParams } from "react-router-dom";

export default function CharacterDetails() {
    const { id } = useParams();
    const { character, loading, error } = useCharacterDetails(id);
    console.log(character);

    if (loading) {
        return <p>data is loading</p>
    }
    if (error) {
        return <p>something went wrong</p>
    }

    return (
        <CharacterInfo data={character} />
    )
}