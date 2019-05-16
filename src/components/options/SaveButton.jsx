import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../actions/user-actions';
import Button from "../Button";
import SaveIcon from 'material-ui/svg-icons/content/save';

const createNewOptions = ({
                              neuralNetwork,
                              matcher,
                              rating: {minRating}
                          }, userOptions) => ({
    ...userOptions,
    useNeuralNetwork: neuralNetwork,
    matcher: matcher,
    minRating: minRating,
});

const SaveButton = ({options, userOptions, updateOptions}) => (
    <Button
        className="options-button"
        text="Save"
        primary={true}
        icon={<SaveIcon/>}
        onClick={() => updateOptions(createNewOptions(options, userOptions))}
    />
);

const mapStateToProps = state => ({
    userOptions: state.user.options,
    options: state.options,
});

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SaveButton);