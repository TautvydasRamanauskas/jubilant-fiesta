import React from 'react';
import Button from "../Button";
import LinkImage from 'material-ui/svg-icons/content/link';
import TextField from 'material-ui/TextField';

const LinkGenerate = ({link, onGenerateLink}) => (
    <div>
        {
            link ?
                <TextField className="table-button" disabled={true} defaultValue={link}/> :
                <Button onClick={e => onGenerateLink()} text="Generate Link" icon={<LinkImage/>}
                        className="table-button"/>
        }
    </div>
);

export default LinkGenerate