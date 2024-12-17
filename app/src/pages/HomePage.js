import React, {Fragment, useState} from "react";
import { fetchCocktails } from "../services/api";
import SearchBar from "../components/SearchBar";

const HomePage = () => {
    const [cocktails, setCocktails] = useState([])

    const handleSearch = async (searchTerm) => {
        const data = await fetchCocktails(searchTerm)
        setCocktails(data || []);
    }
    return(
        <main>
            <h2>Welcome to Cocktail Bar</h2>
            <SearchBar onSearch={handleSearch} />
            <div>
                {cocktails.map((cocktail) => {
                   return(
                       <div key={cocktail.idDrink}>
                           <p>
                               {cocktail.strDrink}
                           </p>
                           <img src={cocktail.strDrinkThumb} alt="cocktail.strDrinkThumb" width="100"/>
                       </div>
                   )
                })}
            </div>
        </main>
    )
}
export default HomePage;