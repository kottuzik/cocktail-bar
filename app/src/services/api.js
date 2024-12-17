import axios from 'axios';

const API_BASE_URL = 'https://www.thecocktaildb.com/api/json/v1/1';

// Загружаем случайные коктейли по умолчанию
export const fetchRandomCocktails = async () => {
    const response = await axios.get(`${API_BASE_URL}/filter.php?a=Alcoholic`);
    return response.data.drinks || [];
};

// Поиск по запросу
export const fetchCocktails = async (searchTerm) => {
    const response = await axios.get(`${API_BASE_URL}/search.php?s=${searchTerm}`);
    return response.data.drinks || [];
};
