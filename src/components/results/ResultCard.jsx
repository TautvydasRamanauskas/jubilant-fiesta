import React from 'react';
import Reference from "./Reference";
import Vote from "./Vote";
import {Card, CardActions, CardText, CardTitle} from 'material-ui/Card';
import {Divider, Paper} from "material-ui";
import BookmarkButton from "./BookmarkButton";

const ResultCard = ({number, result, onBookmarkClick, addVote, removeVote}) => {
    const {result: title, references, voteValue, bookmark, personalVote} = result;
    const rating = references.length + voteValue;
    const userVotes = voteValue ? `(${voteValue > 0 ? '+' : ''}${voteValue})` : '';
    const referencesRows = references.map(r => <Reference reference={r}/>);
    const bookmarkButton = (
        <BookmarkButton
            className="bookmark-button"
            bookmark={bookmark}
            onClick={e => onBookmarkClick(result)}
        />
    );
    return (
        <Paper className="search-result" zDepth={5}>
            <Card>
                <CardTitle title={`${number + 1}. ${title}`} subtitle={`Rating: ${rating} ${userVotes}`}
                           openIcon={bookmarkButton} closeIcon={bookmarkButton} showExpandableButton={true}/>
                <Divider/>
                <CardText>
                    {referencesRows}
                </CardText>
                <Divider/>
                <CardActions>
                    <Vote
                        className="vote-button"
                        result={result}
                        personalVote={personalVote}
                        addVote={v => addVote({...v, result})}
                        removeVote={v => removeVote({...v, result})}
                    />
                </CardActions>
            </Card>
        </Paper>
    );
};

export default ResultCard
