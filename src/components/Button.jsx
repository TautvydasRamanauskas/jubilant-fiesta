import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

const Button = ({text, onClick, primary, secondary, icon, className}) => (
    <div>
        <RaisedButton
            className={className ? className : "action-button"}
            labelPosition="before"
            label={text}
            primary={!!primary}
            secondary={!!secondary}
            onClick={e => onClick()}
            icon={icon}
        />
    </div>
);

export default Button