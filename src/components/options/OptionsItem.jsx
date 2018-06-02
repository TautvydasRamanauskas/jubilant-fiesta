import React from 'react';
import {ListItem} from 'material-ui/List';
import Toggle from 'material-ui/Toggle';

const OptionsItem = ({text, secondaryText, toggled, onToggle}) => (
    <ListItem
        rightToggle={<Toggle toggled={toggled} onToggle={(o, t) => onToggle(t)}/>}
        primaryText={text}
        secondaryText={secondaryText}
    />
);

export default OptionsItem;