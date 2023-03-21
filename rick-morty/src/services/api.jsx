const API_URL = 'https://rickandmortyapi.com/api';
const getCharacters = async () => {
    try {
        const response = await fetch(`${API_URL}/character`);
        return await response.json();
    } catch (error) {
        console.error(error);
        return error;
    }
};

const getCharactersByKeys = async (query) => {
    try {
        const response = await fetch(`https://rickandmortyapi.com/api/character/?name=${query}`);
        return await response.json();
    } catch (error) {
        console.error(error);
        return error;
    }
}

const getCharactersById = async (id) => {
    try {
        const response = await fetch(`${API_URL}/character/${id}`);
        return await response.json();
    } catch (error) {
        console.error(error);
        return error;
    }
};

export {
    getCharacters,
    getCharactersById,
    getCharactersByKeys,
}