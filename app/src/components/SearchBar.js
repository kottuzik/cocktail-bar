import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
    const [searchItem, setSearchItem] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch(searchItem);
    };
    return(
        <form onSubmit={handleSubmit}>
            <input type="text"
                    placeholder="Search your drink"
                   value={searchItem}
                   onChange={(e) => setSearchItem(e.target.value)}
            />
            <button type="submit">Search</button>
        </form>
    )
}
export default SearchBar;