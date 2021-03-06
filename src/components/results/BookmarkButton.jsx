import React from 'react';
import BookmarkIcon from 'material-ui/svg-icons/action/bookmark';
import BookmarkBorderIcon from 'material-ui/svg-icons/action/bookmark-border';
import {cyan500 as buttonColor} from 'material-ui/styles/colors';

const BookmarkButton = ({bookmark, onClick}) => {
    return bookmark ?
        <BookmarkIcon color={buttonColor} onClick={onClick}/> :
        <BookmarkBorderIcon color={buttonColor} onClick={onClick}/>
};

export default BookmarkButton
