import React from 'react';

const Reference = ({reference}) => (
    <tr className="reference">
        <td/>
        <td colSpan="5">
            <a href={reference}>{reference}</a>
        </td>
    </tr>
);

export default Reference