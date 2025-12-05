import React, { useContext } from "react";
import styles from "./SearchBar.module.css";
import { ContactContext } from "../../Context/ContactContext";

const SearchBar = () => {
  const { setSearchQuery } = useContext(ContactContext);
  return (
    <div>
      <input
        type="search"
        placeholder="Buscar en el blog..."
        className={styles.searchInput}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
