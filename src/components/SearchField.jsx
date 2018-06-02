import React from 'react';
import TextField from 'material-ui/TextField';

const getErrorText = validation => {
    if (validation === 1) {
        return "Keyword has to be at least 2 symbols long"
    }
    if (validation === 2) {
        return "Keyword contains unsupported symbol(s)\n@#$%^&*!`~+={}|\\?/:;"
    }
};

const SearchField = ({text, onChange, validationVisible}) => (
    <div className="search-field">
        <TextField
            className="search-input"
            hintText=""
            floatingLabelText="Enter you search keyword"
            value={text}
            onChange={e => onChange(e.target.value)}
            errorText={getErrorText(validationVisible)}
        />
    </div>
);

export default SearchField