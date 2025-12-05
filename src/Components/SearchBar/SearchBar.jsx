import React from "react";
import styles from "./SearchBar.module.css";

const SearchBar = ({ onSearch }) => {
    return (
        <div>
        <input
            type="search"
            placeholder="Buscar en el blog..."
            className={styles.searchInput}
            onChange={(e) => onSearch(e.target.value)}
        />
        </div>
    );
};

export default SearchBar;
