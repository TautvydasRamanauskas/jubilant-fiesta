import React from 'react';
import {TableRowColumn} from 'material-ui/Table';
import ThumbsUp from 'material-ui/svg-icons/action/thumb-up';
import ThumbsDown from 'material-ui/svg-icons/action/thumb-down';
import {pink500 as red} from 'material-ui/styles/colors';

const Vote = ({personalVote, addVote, removeVote}) => {
    switch (personalVote) {
        case 1:
            return (
                <TableRowColumn colSpan="2" align="center" onClick={e => removeVote({value: 1})}>
                    <ThumbsUp color={red}/>
                </TableRowColumn>
            );
        case -1:
            return (
                <TableRowColumn colSpan="2" align="center" onClick={e => removeVote({value: -1})}>
                    <ThumbsDown color={red}/>
                </TableRowColumn>
            );
        default:
            return ([
                <TableRowColumn key="up-vote" onClick={e => addVote({value: 1})}>
                    <ThumbsUp color={red}/>
                </TableRowColumn>,
                <TableRowColumn key="down-vote" onClick={e => addVote({value: -1})}>
                    <ThumbsDown color={red}/>
                </TableRowColumn>
            ]);
    }
};

export default Vote