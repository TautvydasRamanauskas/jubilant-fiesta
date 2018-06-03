import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../actions/options-actions';
import Button from "../Button";
import ResetIcon from 'material-ui/svg-icons/action/restore';

const ResetButton = ({userOptions, reset}) => (
    <Button
        className="options-button"
        text="Reset"
        secondary={true}
        icon={<ResetIcon/>}
        onClick={e => reset(userOptions)}
    />
);

const mapStateToProps = state => ({userOptions: state.user.options});

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ResetButton);