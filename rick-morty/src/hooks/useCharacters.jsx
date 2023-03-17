import { useEffect, useState } from "react";
import { getCharacters } from "../services/api";

export const useCharacters = () => {
    const [characters, setCharacters] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    
    useEffect(() => {
        const loadData = async () => {
            setLoading(true);
            try {
                const data = await getCharacters();
                setLoading(false);
                setCharacters(data);
            } catch (error) {
                setLoading(false);
                console.error(error);
                setError(Boolean(error));
            }
        }
        loadData();
    }, []);

    return {
        characters,
        loading,
        error,
    }
}