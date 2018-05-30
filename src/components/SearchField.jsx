import React from 'react';

const SearchField = ({text, onChange, validationVisible}) => (
    <div className="search-field">
        {validationVisible === 1 &&
        <p className="search-field-validation">Keyword has to be at least 2 symbols long</p>}
        {validationVisible === 2 && <p className="search-field-validation">
            Keyword contains unsupported symbol(s)<br/>
            @#$%^&*!`~+={}|\?/:;
        </p>}
        <input
            className="search-input"
            placeholder='Enter you search keyword'
            type="text"
            value={text}
            onChange={e => onChange(e.target.value)}
        />
    </div>
);

export default SearchField