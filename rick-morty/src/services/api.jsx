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
}