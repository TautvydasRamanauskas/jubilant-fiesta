import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../actions/matchers-actions';
import {List} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import OptionsItem from "./OptionsItem";

const matchers = [
    {value: "CONTAINS", text: "Contains"},
    {value: "WORDS", text: "Words"},
    {value: "LEVENSHTEIN", text: "Levenshtein"},
    {value: "COSINE", text: "Cosine"},
    {value: "JARO_WINKLER", text: "Jaro Winkler"},
];

const StringMatchers = ({matcher, changeMatcher}) => (
    <List>
        <Subheader>Results Matching Algorithm</Subheader>
        {matchers.map(m =>
            <OptionsItem
                key={m.value}
                text={m.text}
                toggled={m.value === matcher}
                onToggle={() => changeMatcher(m.value)}
            />
        )}
    </List>
);

const mapStateToProps = state => ({
    matcher: state.options.matcher,
});

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(StringMatchers);
