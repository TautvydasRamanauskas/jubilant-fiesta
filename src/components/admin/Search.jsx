import React from 'react';
import {ListItem} from "material-ui";
import SearchIcon from 'material-ui/svg-icons/action/search';

const Search = ({search}) => {
    return (
        <ListItem
            primaryText={search.keyword}
            secondaryText={`Searches count: ${search.searchCount} | Results count: ${search.resultsCount}`}
            leftIcon={<SearchIcon/>}
        />
    );
};

export default Search;
