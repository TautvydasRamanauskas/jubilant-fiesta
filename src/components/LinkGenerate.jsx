import React from 'react';

const LinkGenerate = ({link, onGenerateLink}) => (
    <div>
        {
            link ?
                <input className="table-button" type="text" disabled="true" value={link}/> :
                <button className="table-button" onClick={e => onGenerateLink()}>Generate Link</button>
        }
    </div>
);

export default LinkGenerate