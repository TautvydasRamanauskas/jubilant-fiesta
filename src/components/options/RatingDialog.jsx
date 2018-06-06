import React from 'react';
import Dialog from 'material-ui/Dialog';
import {FlatButton} from "material-ui";
import RatingSelect from "./RatingSelect";

const RatingDialog = ({isOpen, open, rating, onRatingChange}) => (
    <Dialog
        title="Select minimal rating"
        actions={[
            <FlatButton
                label="Close"
                primary={true}
                onClick={e => open(false)}
            />,
        ]}
        modal={false}
        open={isOpen}
        onRequestClose={e => open(false)}
    >
        <RatingSelect rating={rating} onChange={onRatingChange}/>
    </Dialog>
);

export default RatingDialog;
