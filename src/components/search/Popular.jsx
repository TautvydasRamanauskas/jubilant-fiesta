import React from 'react';
import {List} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import PopularItem from "./PopularItem";

const Popular = ({items, onClick}) => (
    <div className="popular">
        <List>
            <Subheader>Most popular searches:</Subheader>
            {items.map((i) => <PopularItem item={i} onClick={onClick}/>)}
        </List>
    </div>
);

export default Popular;
