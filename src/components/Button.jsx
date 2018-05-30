import React from 'react';

const Button = ({text, onClick}) => (
    <div>
        <input
            className="action-button"
            type="button"
            value={text}
            onClick={e => onClick()}
        />
    </div>
);

export default Button