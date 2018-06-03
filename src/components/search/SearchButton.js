import React from 'react';
import LoadingIndicator from 'react-loading-indicator';
import '../../App.css';
import Button from "../../components/Button";
import SearchIcon from 'material-ui/svg-icons/action/search';

const SearchButton = ({loading, search}) => {
    if (loading) {
        return <LoadingIndicator/>
    }
    return <Button text="Search" onClick={search} primary={true} icon={<SearchIcon/>}/>
};

export default SearchButton;
