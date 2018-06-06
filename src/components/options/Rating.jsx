import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../actions/rating-actions';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import RatingDialog from "./RatingDialog";

const Rating = ({minRating, changeMinimalRating, ratingDialogOpen, openRatingDialog}) => (
    <List>
        <Subheader>Rating</Subheader>
        <ListItem
            primaryText="Minimal rating"
            secondaryText={`Select minimal rating (current - ${minRating})`}
            onClick={e => openRatingDialog(true)}
        />
        <RatingDialog
            isOpen={ratingDialogOpen}
            open={openRatingDialog}
            rating={minRating}
            onRatingChange={changeMinimalRating}
        />
    </List>
);

const mapStateToProps = state => ({
    minRating: state.options.rating.minRating,
    ratingDialogOpen: state.options.rating.ratingDialogOpen,
});

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Rating);