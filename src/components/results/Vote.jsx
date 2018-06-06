import React from 'react';
import ThumbsUp from 'material-ui/svg-icons/action/thumb-up';
import ThumbsDown from 'material-ui/svg-icons/action/thumb-down';
import {cyan500 as buttonColor} from 'material-ui/styles/colors';

const Vote = ({personalVote, addVote, removeVote}) => {
    switch (personalVote) {
        case 1:
            return (
                <ThumbsUp className="card-button" color={buttonColor} onClick={e => removeVote({value: 1})}/>
            );
        case -1:
            return (
                <ThumbsDown className="card-button" color={buttonColor} onClick={e => removeVote({value: -1})}/>
            );
        default:
            return (
                <span>
                    <ThumbsUp className="card-button" color={buttonColor} onClick={e => addVote({value: 1})}/>
                    <ThumbsDown className="card-button" color={buttonColor} onClick={e => addVote({value: -1})}/>
                </span>
            );
    }
};

export default Vote