import React from 'react';

const Popular = ({items, onClick}) => (
    <div className="popular">
        <b>Most popular searches:</b>
        <ul>
            {items.map((i, n) => (
                <li key={n} onClick={e => onClick(i)}>
                    {i}
                </li>
            ))}
        </ul>
    </div>
);

export default Popular;