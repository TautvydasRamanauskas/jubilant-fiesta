import React from 'react';
import Reference from "./Reference";
import Vote from "./Vote";

const Result = ({number, result, onBookmarkClick, addVote, removeVote}) => {
    const {result: title, count, voteValue, bookmark, personalVote} = result;
    const rating = count + voteValue;
    const userVotes = voteValue ? `(${voteValue > 0 ? '+' : ''}${voteValue})` : '';
    const referencesRows = result.references.map(r => <Reference reference={r}/>);
    return ([
        <tr className="result-row">
            <td align="center">
                {number + 1}.
            </td>
            <td>
                {title}
            </td>
            <td>
                Rating: {rating} {userVotes}
            </td>
            <td onClick={e => onBookmarkClick(result)}>
                {bookmark ? '★' : '☆'}
            </td>
            <Vote
                result={result}
                personalVote={personalVote}
                addVote={v => addVote({...v, result})}
                removeVote={v => removeVote({...v, result})}
            />
        </tr>,
        referencesRows,
    ])
};

export default Result