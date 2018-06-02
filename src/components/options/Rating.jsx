import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../actions/rating-actions';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Dialog from 'material-ui/Dialog';
import {FlatButton, TextField} from "material-ui";

const Rating = ({minRating, changeMinimalRating, ratingDialogOpen, openRatingDialog}) => (
    <List>
        <Subheader>Rating</Subheader>
        <ListItem
            primaryText="Minimal rating"
            secondaryText={`Select minimal rating (current - ${minRating})`}
            onClick={e => openRatingDialog(true)}
        />
        <Dialog
            title="Select minimal rating"
            actions={[
                <FlatButton label="Close" primary={true} keyboardFocused={true}
                            onClick={e => openRatingDialog(false)}/>,
            ]}
            modal={false}
            open={ratingDialogOpen}
            onRequestClose={e => openRatingDialog(false)}
        >
            <TextField value={minRating} type="number" onChange={e => changeMinimalRating(e.target.value)}/>
        </Dialog>
    </List>
);

const mapStateToProps = state => ({
    minRating: state.options.rating.minRating,
    ratingDialogOpen: state.options.rating.ratingDialogOpen,
});

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Rating);