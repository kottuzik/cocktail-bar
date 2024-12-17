import React, {useState, useEffect} from "react";
import {fetchCocktails, fetchRandomCocktails} from "../services/api";
import SearchBar from "../components/SearchBar";

const HomePage = () => {
    const [cocktails, setCocktails] = useState([])

    useEffect(() => {
        const loadRandomCocktails = async () => {
            const data = await fetchRandomCocktails();
            setCocktails(data);
        };
        loadRandomCocktails();
    }, []);

    const handleSearch = async (searchTerm) => {
        const data = await fetchCocktails(searchTerm)
        setCocktails(data || []);
    }
    return (
        <main>
            <h2>Welcome to Cocktail Bar</h2>
            <SearchBar onSearch={handleSearch}/>
            <ul className="cocktails-list">
                {cocktails.length > 0 ? (
                    cocktails.map((cocktail) => (
                        <li key={cocktail.idDrink} className="cocktails-item">
                            <p>{cocktail.strDrink}</p>
                            <img
                                src={cocktail.strDrinkThumb}
                                alt={cocktail.strDrink}
                                width="100"
                            />
                        </li>
                    ))
                ) : (
                    <p>No cocktails found</p>
                )}
            </ul>
        </main>
    )
}
export default HomePage;