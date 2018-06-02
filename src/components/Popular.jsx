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
            {items.map((i, n) => <PopularItem i={i} n={n} onClick={onClick}/>)}
        </List>
    </div>
);

const PopularItem = ({i, n, onClick}) => (
    <ListItem
        key={n}
        onClick={e => onClick(i)}
        primaryText={i}
        style={style}
        rightIcon={<Search color={popularItemColor}/>}
    />
);

export default Popular;