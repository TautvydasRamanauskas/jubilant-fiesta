import React from 'react';
import {TableRow, TableRowColumn} from 'material-ui/Table';

const Reference = ({reference}) => (
    <TableRow className="reference">
        <TableRowColumn/>
        <TableRowColumn colSpan="5">
            <a href={reference}>{reference}</a>
        </TableRowColumn>
    </TableRow>
);

export default Reference