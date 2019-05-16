import React from 'react';

const trimUrl = (url) => {
    return new URL(url).hostname
};

const Reference = ({reference}) => (
    <div className="reference">
        <a href={reference} target="_blank">{trimUrl(reference)}</a>
    </div>
);

export default Reference