import React from 'react';
import ClearIcon from 'material-ui/svg-icons/action/delete';
import Button from "../Button";

const ClearButton = ({text, onClick}) => (
    <Button
        className="options-button"
        text={text}
        secondary={true}
        icon={<ClearIcon/>}
        onClick={e => onClick()}
    />
);

export default ClearButton;
