import { useState, useEffect } from "react";
import { getCharactersById } from "../services/api";

export const useCharacterDetails = (id) => {
    const [character, setCharacter] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        const loadData = async () => {
            setLoading(true);
            try {
                const data = await getCharactersById(id);
                setLoading(false);
                setCharacter(data);
            } catch (error) {
                setLoading(false);
                console.error(error);
                setError(Boolean(error));
            }
        }
        loadData();
    }, []);

    return {
        character, 
        loading,
        error,
    }
}