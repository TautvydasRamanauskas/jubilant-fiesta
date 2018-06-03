import React from 'react';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Search from 'material-ui/svg-icons/action/search';
import {amber300 as popularItemColor} from 'material-ui/styles/colors';

const style = {
    textDecoration: 'underline',
    fontStyle: 'italic',
    color: popularItemColor,
};

const Popular = ({items, onClick}) => (
    <div className="popular">
        <List>
            <Subheader>Most popular searches:</Subheader>
            {items.map((i) => <PopularItem item={i} onClick={onClick}/>)}
        </List>
    </div>
);

const PopularItem = ({item, onClick}) => (
    <ListItem
        key={item.id}
        onClick={e => onClick(item.keyword)}
        primaryText={item.keyword}
        style={style}
        rightIcon={<Search color={popularItemColor}/>}
    />
);

export default Popular;