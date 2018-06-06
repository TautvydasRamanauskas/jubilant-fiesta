import React from 'react';
import Reference from "./Reference";
import Vote from "./Vote";
import {Card, CardActions, CardText} from 'material-ui/Card';
import {CardHeader, Divider, Paper} from "material-ui";
import BookmarkButton from "./BookmarkButton";

const titleStyle = {
    fontSize: "1.5em",
    fontStyle: "bold",
};

const ResultCard = ({number, result, onBookmarkClick, addVote, removeVote}) => {
    const {result: title, references, voteValue, bookmark, personalVote} = result;
    const rating = references.length + voteValue;
    const userVotes = voteValue ? `(${voteValue > 0 ? '+' : ''}${voteValue})` : '';
    const referencesRows = references.map((r, i) => <Reference key={i} reference={r}/>);
    const bookmarkButton = (
        <BookmarkButton
            bookmark={bookmark}
            onClick={e => onBookmarkClick(result)}
        />
    );
    return (
        <Paper className="search-result" zDepth={5}>
            <Card>
                <CardHeader
                    title={`${number + 1}. ${title}`}
                    titleStyle={titleStyle}
                    subtitle={`Rating: ${rating} ${userVotes}`}
                    showExpandableButton={true}
                    openIcon={bookmarkButton}
                    closeIcon={bookmarkButton}
                />
                <Divider/>
                <CardText>
                    {referencesRows}
                </CardText>
                <Divider/>
                <CardActions>
                    <Vote
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
