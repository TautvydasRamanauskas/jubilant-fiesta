import React from 'react';
import Reference from "./Reference";
import Vote from "./Vote";
import {TableRow, TableRowColumn} from 'material-ui/Table';
import Bookmark from 'material-ui/svg-icons/action/bookmark';
import BookmarkBorder from 'material-ui/svg-icons/action/bookmark-border';
import {pink500 as red} from 'material-ui/styles/colors';

const Result = ({number, result, onBookmarkClick, addVote, removeVote}) => {
    const {result: title, count, voteValue, bookmark, personalVote} = result;
    const rating = count + voteValue;
    const userVotes = voteValue ? `(${voteValue > 0 ? '+' : ''}${voteValue})` : '';
    const referencesRows = result.references.map(r => <Reference reference={r}/>);
    return ([
        <TableRow className="result-row">
            <TableRowColumn align="center">
                {number + 1}.
            </TableRowColumn>
            <TableRowColumn>
                {title}
            </TableRowColumn>
            <TableRowColumn>
                Rating: {rating} {userVotes}
            </TableRowColumn>
            <TableRowColumn>
                {bookmark ?
                    <Bookmark color={red} onClick={e => onBookmarkClick(result)}/> :
                    <BookmarkBorder color={red} onClick={e => onBookmarkClick(result)}/>}
            </TableRowColumn>
            <Vote
                result={result}
                personalVote={personalVote}
                addVote={v => addVote({...v, result})}
                removeVote={v => removeVote({...v, result})}
            />
        </TableRow>,
        referencesRows,
    ])
};

export default Result