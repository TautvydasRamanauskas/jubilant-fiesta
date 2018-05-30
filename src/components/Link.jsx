import React from 'react';

const Link = ({text, onClick, onChange}) => (
    <div>
        <input
            className="link-field"
            type="text"
            placeholder="Copy your link here"
            value={text}
            onChange={e => onChange(e.target.value)}
        />
        <button onClick={e => onClick()}>Display</button>
    </div>
);

export default Link