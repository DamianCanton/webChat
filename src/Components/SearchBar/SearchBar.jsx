import React from 'react'
import styles from './SearchBar.module.css'

const SearchBar = () => {
    return (
    <div>
        <span className={styles.searchIcon}>🔍</span>
                        <input
                            type="search"
                            placeholder="Buscar en el blog..."
                            className={styles.searchInput}
                            // Dejamos la lógica (onChange, value) para más adelante
                        />
    </div>
    )
}

export default SearchBar