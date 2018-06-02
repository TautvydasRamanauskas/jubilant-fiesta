import React from 'react';
import TextField from 'material-ui/TextField';
import IconButton from 'material-ui/IconButton';
import DisplayIcon from 'material-ui/svg-icons/action/input';
import {teal500 as displayColor} from 'material-ui/styles/colors';

const Link = ({text, onClick, onChange}) => (
    <div>
        <TextField
            className="link-field"
            hintText="Copy your link here"
            value={text}
            onChange={e => onChange(e.target.value)}
        />
        <IconButton onClick={e => onClick()}>
            <DisplayIcon color={displayColor}/>
        </IconButton>
    </div>
);

export default Link