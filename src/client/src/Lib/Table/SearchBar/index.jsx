/**
 * Table SearchBar component
 * @author Anthony P. Pancerella
 */
import React from 'react';

/**
 * The SearchBar component
 * @return {React.Element}
 */
const SearchBar = (props) => {
    let input;

    /**
     * On update function
     * @returns {Void}
     */
    const updateSearch = () => props.onSearch(input.value);
    return (
        <div style={{ marginBottom: 5 }}>
            <input
                className="form-control"
                ref={(n) => { input = n; }}
                type="text"
                placeholder="Search..."
                onChange={updateSearch}
                style={{ height: 30 }}
            />
        </div>
    );
};

export default SearchBar;
