import React from 'react';

const Vote = ({personalVote, addVote, removeVote}) => {
    switch (personalVote) {
        case 1:
            return (
                <td colSpan="2" align="center" onClick={e => removeVote({value: 1})}>⬆</td>
            );
        case -1:
            return (
                <td colSpan="2" align="center" onClick={e => removeVote({value: -1})}>⬇</td>
            );
        default:
            return ([
                <td key="up-vote" onClick={e => addVote({value: 1})}>⇧</td>,
                <td key="down-vote" onClick={e => addVote({value: -1})}>⇩</td>
            ]);
    }
};

export default Vote