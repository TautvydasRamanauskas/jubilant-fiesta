import React from 'react';
import {ListItem} from 'material-ui/List';
import Search from 'material-ui/svg-icons/action/search';
import {cyan500 as popularItemColor} from 'material-ui/styles/colors';

const style = {
    textDecoration: 'underline',
    fontStyle: 'italic',
    color: popularItemColor,
};

const PopularItem = ({item, onClick}) => (
    <ListItem
        key={item.id}
        onClick={e => onClick(item.keyword)}
        primaryText={item.keyword}
        style={style}
        rightIcon={<Search color={popularItemColor}/>}
    />
);

export default PopularItem;
