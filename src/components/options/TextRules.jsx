import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../actions/text-rules-actions';
import {List} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import OptionsItem from "./OptionsItem";

const TextRules = ({
                       parenthesisState, changeParenthesis,
                       reviewState, changeReview,
                       numbersState, changeNumbers
                   }) => (
    <List>
        <Subheader>Text Rules</Subheader>
        <OptionsItem text="Parenthesis" secondaryText="Removes parenthesis"
                     toggled={parenthesisState} onToggle={changeParenthesis}/>
        <OptionsItem text="Word 'Review'" secondaryText="Removes word 'Review'"
                     toggled={reviewState} onToggle={changeReview}/>
        <OptionsItem text="Numbers" secondaryText="Removes numbers"
                     toggled={numbersState} onToggle={changeNumbers}/>
    </List>
);

const mapStateToProps = state => ({
    parenthesisState: state.options.textRules.parenthesis,
    reviewState: state.options.textRules.review,
    numbersState: state.options.textRules.numbers,
});

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TextRules);