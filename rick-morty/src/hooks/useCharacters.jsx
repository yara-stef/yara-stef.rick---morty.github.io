import { useEffect, useState } from "react";
import { getCharacters, getCharactersByKeys } from "../services/api";

export const useCharacters = (query) => {
    const [characters, setCharacters] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    
    useEffect(() => {
        const loadData = async () => {
            setLoading(true);
            try {
                const data = query.length ? await getCharactersByKeys(query) : await getCharacters();
                setLoading(false);
                setCharacters(data);
            } catch (error) {
                setLoading(false);
                console.error(error);
                setError(Boolean(error));
            }
        }
        loadData();
    }, [query.length]);

    return {
        characters,
        loading,
        error,
    }
}