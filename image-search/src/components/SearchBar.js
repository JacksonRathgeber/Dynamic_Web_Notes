import {useState} from 'react';

const SearchBar = (props) => {
    const {onSubmit} = props;
    const handleFormSubmit = (event) => {
        event.preventDefault();
        const input = event.target.elements[0];
        const term = input.value;
        onSubmit(term);
    }
    return (
        <div>
            <form onSubmit={handleFormSubmit}>
                <input type="text" />
            </form>
        </div>
    );
};

export default SearchBar;
